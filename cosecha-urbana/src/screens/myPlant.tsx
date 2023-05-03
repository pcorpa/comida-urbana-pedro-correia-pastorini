import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { COLORS } from "../constants";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { RootState } from "../redux";
import { Plant, selectPlant } from "../redux/slices/plantSlice";
import { PlantCard } from "../components";
import { FirebaseDB, loadAllPlants, plantsCollection } from "../firebase";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { DocumentData } from "firebase/firestore/lite";

type Props = NativeStackScreenProps<RootStackParamList, "MyPlantScreen">;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ExtractedObject {
  plant_id: string;
  user_id: string;
  name: string;
  edible: boolean;
  photoUri: string;
}
async function getPlants() {
  const allPlants = await loadAllPlants();

  if (!allPlants || (allPlants && allPlants.plants?.length === 0))
    return { ok: false, error: "No plants found" };

  return allPlants.plants;
}

export function MyPlantScreen() {
  const [docsData, setDocsData] = useState<DocumentData[]>([]);
  const dispatch = useDispatch();

  const planta = [{ id: "", name: "", edible: true, photoUri: "" }];
  const [plants, setPlants] = useState<Plant[]>([]);
  useEffect(() => {
    onSnapshot(collection(FirebaseDB, "plants"), (snapshot) => {
      setPlants(
        snapshot.docs.map((doc) => ({
          id: doc.data().plant_id,
          name: doc.data().name,
          edible: doc.data().edible,
          photoUri: doc.data().photoUri,
        }))
      );
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />

      {docsData && docsData.map((d) => <Text>{d.name}</Text>)}
      {Array.isArray(plants) ? (
        <FlatList
          data={plants}
          renderItem={({ item }) => (
            <PlantCard
              id={item.id}
              name={item.name}
              edible={item.edible}
              photoUri={item.photoUri}
            />
          )}
        />
      ) : (
        <Text>Aqui se mostraran las plantas que has agregado</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    flexDirection: "row",
    width: widthPixel(375),
    alignSelf: "center",
    backgroundColor: COLORS.green5,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  deleteIcon: {
    width: widthPixel(20),
    alignSelf: "flex-end",
    borderRightColor: "red",
  },
  plantData: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: widthPixel(235),
    paddingLeft: widthPixel(10),
  },
  text: {
    textAlign: "center",
    color: COLORS.green1,
    fontFamily: "Nunito-Regular",
    fontSize: fontPixel(16),
    paddingVertical: heightPixel(5),
  },
  image: {
    width: widthPixel(100),
    height: heightPixel(100),
    borderRadius: widthPixel(20),
  },
});
