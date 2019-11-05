import camelcaseKeys from 'camelcase-keys';
import store from 'app/store';
import {
  resChatRooms,
  resChatConversation,
  resNewChat,
  resAcceptOffer
} from 'reducers/ChatDux';
import Socket from './socketSetup';

export const getChatRooms = () => {
  Socket.socket.on('res_chat_rooms', payload => {
    store.dispatch(
      resChatRooms({
        ...camelcaseKeys(payload)
      })
    );
  });
};

export const getChatConversation = () => {
  Socket.socket.on('res_conversation', payload => {
    store.dispatch(
      resChatConversation({
        chatRoom: camelcaseKeys(payload, { deep: true })
      })
    );
  });
};

export const getNewMessage = () => {
  Socket.socket.on('res_new_message', payload => {
    console.log(payload);
    store.dispatch(
      resNewChat({
        ...camelcaseKeys(payload, { deep: true })
      })
    );
  });
};

export const getNewOffer = () => {
  Socket.socket.on('res_new_offer', payload => {
    store.dispatch(
      resNewChat({
        ...camelcaseKeys(payload, { deep: true })
      })
    );
  });
};

export const getAcceptOffer = () => {
  Socket.socket.on('res_accept_offer', payload => {
    store.dispatch(
      resAcceptOffer({
        ...camelcaseKeys(payload, { deep: true })
      })
    );
  });
};

const initialize = () => {
  Socket.getChatRooms = getChatRooms();
  Socket.getChatConversation = getChatConversation();
  Socket.getNewMessage = getNewMessage();
  Socket.getNewOffer = getNewOffer();
  Socket.getAcceptOffer = getAcceptOffer();
};

export default {
  initialize
};
