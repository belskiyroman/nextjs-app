import { commonTypes } from '../types';

export const actionIndex = payload => ({ type: commonTypes.INDEX_TEST, payload });
export const actionServerData = payload => ({ type: commonTypes.SERVER_DATA, payload });
