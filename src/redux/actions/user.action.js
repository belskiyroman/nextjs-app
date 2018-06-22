import { userTypes } from './../types';

export const login = payload => ({ type: userTypes.LOGIN_REQUEST, payload });
export const loginError = payload => ({ type: userTypes.LOGIN_ERROR, payload });
export const loginSuccess = payload => ({ type: userTypes.LOGIN_SUCCESS, payload });
