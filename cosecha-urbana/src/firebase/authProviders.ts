import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

interface CreateWithEmailProps {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export const createUserWithEmailPassword = async ({
  name,
  surname,
  email,
  password,
}: CreateWithEmailProps) => {
  try {
    const response = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, email: emailFromFirebase } = (await response).user;

    return await { ok: true, uid, emailFromFirebase };
  } catch (error) {
    return {
      ok: false,
      error: error,
    };
  }
};

export const signInWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const response = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const {
      user: { email: emailFromFirebase, displayName, uid, photoURL },
    } = await response;
    return {
      ok: true,
      displayName,
      emailFromFirebase,
      uid,
      photoURL,
    };
  } catch (error) {
    return { ok: false, error };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
