import {  Session,  AuthActionTypes, REGISTER, LOGIN, LOGOUT } from '../types'

export const initialState: Session = {
    session: false,
    userId: "",
    userEmail: "",
    userName: "",
    userLastName: "",
}

export function authReducer(state: Session = initialState, action: AuthActionTypes): Session {
    switch (action.type) {
      case REGISTER: 
        return({session: true, userId: action.payload.userId, userEmail: action.payload.userEmail, userName: action.payload.userName, userLastName: action.payload.userLastName});
      break
      case LOGIN: 
        return ({session: true, userId: action.payload.userId, userEmail: action.payload.userEmail, userName: action.payload.userName, userLastName: action.payload.userLastName})
      break
      case LOGOUT: 
        return (({session: false, userId: "", userEmail: "", userName: "", userLastName: ""}))
      break
      default:
        return state
    }
  };