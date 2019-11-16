/* eslint-disable import/prefer-default-export */
import moment from 'moment';
import { fromUnixTime } from 'date-fns';

export const displayChatRelativeTime = date => {
  return moment(date, 'DD-MM-YYYY').calendar(null, {
    sameDay: '[Today]',
    lastDay: '[Yesterday]',
    lastWeek: 'MMM D',
    sameElse: 'MMM D'
  });
};

export const getDate = item => {
  return moment(fromUnixTime(item.createdAt)).format('DD-MM-YYYY');
};
