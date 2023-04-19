import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../index";

export interface Session {
  session: boolean;
  userId: string;
  userEmail: string;
  userName: string;
  userLastName: string;
}

export const initialState: Session = {
  session: false,
  userId: "",
  userEmail: "",
  userName: "",
  userLastName: "",
};

export const authSlice = createSlice({
  name: "plantSlice",
  initialState,
  reducers: {
    register: (state: Session, action: PayloadAction<Session>) => {
      return {
        session: true,
        userId: action.payload.userId,
        userEmail: action.payload.userEmail,
        userName: action.payload.userName,
        userLastName: action.payload.userLastName,
      };
    },
    login: (state: Session, action: PayloadAction<Session>) => {
      return {
        session: true,
        userId: action.payload.userId,
        userEmail: action.payload.userEmail,
        userName: action.payload.userName,
        userLastName: action.payload.userLastName,
      };
    },
    logout: (state: Session, action: PayloadAction<Session>) => {
      return {
        session: false,
        userId: "",
        userEmail: "",
        userName: "",
        userLastName: "",
      };
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
