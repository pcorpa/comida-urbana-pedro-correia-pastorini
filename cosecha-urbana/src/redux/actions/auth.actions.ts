import { ActionCreator } from 'redux';
import { REGISTER,  Session, AuthActionTypes, LOGIN, LOGOUT } from '../types';

export const RegisterActionAuth: ActionCreator<AuthActionTypes> = (session: Session) => {
  return { type: REGISTER, payload: session };
}
export const LoginActionAuth: ActionCreator<AuthActionTypes> = (session: Session) => {
  return { type: LOGIN, payload: session };
}
export const LogoutActionAuth: ActionCreator<AuthActionTypes> = () => {
  return { type: LOGOUT};
}









  
