import { initialState as chatInitialState } from 'reducers/ChatDux';

const migrations = {
  0: _previousVersionState => ({ chat: chatInitialState })
};

export default migrations;