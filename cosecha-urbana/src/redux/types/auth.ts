export interface Session {
    session: boolean;
    userId: string;
    userEmail: string;
    userName: string;
    userLastName: string;
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';


interface LoginAction {
    type: typeof LOGIN,
    payload: Session
}

interface LogoutAction  {
    type: typeof LOGOUT,
    
}

interface RegisterAction  {
    type: typeof REGISTER,
    payload: Session
}

export type AuthActionTypes = LoginAction | LogoutAction | RegisterAction