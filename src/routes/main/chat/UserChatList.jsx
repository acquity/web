import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import differenceInHours from 'date-fns/differenceInHours';

import Socket from './socketService';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500]
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}));

const UserChatList = ({ chatList, chatRoomId }) => {
  const classes = useStyles();

  return (
    <div>
      {chatList.map(user => (
        <CardActionArea
          onClick={() => {
            Socket.setChat({ chatRoomId: user.chat_room_id });
            Socket.setChatRoom({ chatRoomId: user.chat_room_id });
          }}
        >
          <List
            className={classes.root}
            style={{
              background: user.chat_room_id === chatRoomId ? '#EBEBEB' : 'white'
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.dealer_name}>
                  {user.dealer_name.match(/\b(\w)/g).join('')}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Grid container>
                    <Grid item xs={6}>
                      <Truncate lines={1} ellipsis={<span>...</span>}>
                        {user.dealer_name}
                      </Truncate>
                    </Grid>
                    <Grid item xs={6}>
                      <Truncate
                        style={{ fontSize: 12 }}
                        lines={1}
                        ellipsis={<span>...</span>}
                      >
                        {differenceInHours(
                          new Date(),
                          new Date(user.created_at * 1000)
                        ) >= 24 ? (
                          <Moment format="D MMM YYYY" withTitle>
                            {new Date(user.created_at * 1000).toDateString()}
                          </Moment>
                        ) : (
                          <Moment fromNow>
                            {new Date(user.created_at * 1000)}
                          </Moment>
                        )}
                      </Truncate>
                    </Grid>
                  </Grid>
                }
                secondary={
                  <Truncate lines={1} ellipsis={<span>...</span>}>
                    {user.text}
                  </Truncate>
                }
              />
            </ListItem>
          </List>
        </CardActionArea>
      ))}
    </div>
  );
};

function matchStateToProps(state) {
  return {
    chatList: state.chat.chatList,
    chatRoomId: state.chat.chat_room_id
  };
}

// eslint-disable-next-line no-unused-vars
function matchDispatchToProps(dispatch) {
  return {};
}

export default connect(
  matchStateToProps,
  matchDispatchToProps()
)(UserChatList);
