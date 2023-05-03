import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

export interface User {
  photoURL: string | null;
  userId: string | null;
  userEmail: string | null;
  userName: string | null;
  userLastName: string | null;
}
export interface Session {
  status: "checking" | "not-authenticated" | "authenticated";
  errorMessage: string | null;
  token: string | null;
  user: User | null;
}

export const initialState: Session = {
  status: "not-authenticated",
  errorMessage: null,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state: Session, action: PayloadAction<Session>) => {
      const { user } = action.payload;
      return {
        status: "authenticated",
        errorMessage: null,
        token: action.payload.token,
        user: {
          userEmail: user?.userEmail,
          userId: user?.userId,
          userName: user?.userName,
          userLastName: user?.userLastName,
          photoURL: user?.photoURL,
        },
      } as Session;
    },
    logout: (state: Session, action: PayloadAction<string | null>) => {
      return {
        status: "not-authenticated",
        errorMessage:
          action.payload ===
          "FirebaseError: Firebase: Error (auth/user-not-found)."
            ? "Email o password incorrectos"
            : action.payload,
        token: null,
        user: null,
      } as Session;
    },
    checkingCredentials: (state: Session) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
