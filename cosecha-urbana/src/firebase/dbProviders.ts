import {
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { FirebaseDB } from "./config";
import { type Plant } from "../redux/slices/plantSlice";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { limit, query } from "firebase/firestore";

export const plantsCollection = collection(FirebaseDB, "/plants");

export const firestoreAddPlant = async (
  name: string,
  edible: boolean = false,
  photoUri: string = ""
) => {
  try {
    const user = await getAuth().currentUser;

    const newDoc = await doc(collection(FirebaseDB, `plants/`));

    const { id } = await newDoc;
    if (user) {
      const { uid } = await user;
      const newPlant = {
        plant_id: await newDoc.id,
        user_id: await uid,
        name,
        edible,
        photoUri,
      };

      const setDocResp = await setDoc(newDoc, newPlant);
      return { ok: true, id };
    }
  } catch (error) {
    return { ok: false, error };
  }
};

export const loadSingleUserPlant = async (id: string) => {
  const auth = getAuth().currentUser;
  const docRef = doc(FirebaseDB, `plants/${id}`);
  try {
    const doc = await getDoc(docRef);
    if (doc.exists()) {
      const { name } = doc.data;

      console.log(await doc.data);
      return await { ok: true, doc };
    }
  } catch (error) {
    console.log("ERROR", error);
    return { ok: false, error };
  }
};

export const loadAllPlants = async () => {
  const collectionRef = collection(FirebaseDB, "/plants");
  // const q = query(collection(FirebaseDB, "/plants"), limit(2));
  try {
    const docs = await getDocs(collectionRef);

    const plants: Plant[] = [];

    if (!docs) return { ok: false, error: "No docs" };

    docs.forEach((d) => {
      plants.push(d.data().name);
    });
    return { ok: true, plants };
  } catch (error) {
    console.log("ERROR", error);
    return { ok: false, error };
  }
};

export const saveToRealTimeDB = async ({
  id,
  name,
  edible,
  photoUri,
}: Plant) => {
  try {
    const response = await fetch(FirebaseDB + "plants.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        edible,
        photoUri,
      }),
    });
  } catch (error) {
    console.log("DBPROVIDERS ERROR: ", error);
  }
};
