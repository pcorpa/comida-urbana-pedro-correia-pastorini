import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { LargeButton, StyledTextInput } from "../components";
import { COLORS } from "../constants";
import { AntDesign } from "@expo/vector-icons";
import { widthPixel, fontPixel, heightPixel } from "../utils/normalize";
import ImageSelector from "../components/imageSelector";

import { RootState } from "../redux/index";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import {
  selectPlant,
  Plant,
  addPlantToLocalStore,
} from "../redux/slices/plantSlice";
import { firestoreAddPlant, saveToRealTimeDB } from "../firebase/dbProviders";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export function AddPlantScreen() {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [photoUri, setPhotoUri] = useState<string>("");
  const [edible, setEdible] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>();

  const plants = useTypedSelector(selectPlant);

  const addNewPlant = async ({ name, edible, photoUri }: Plant) => {
    if (!name) {
      alert("Debes nombrar la planta que quieres agregar");
    } else if (!photoUri) {
      alert("Debes elegir una imagen");
    } else {
      try {
        const plantFromSetDoc = await firestoreAddPlant(name, edible, photoUri);

        if (plantFromSetDoc?.id) {
          await setCurrentId(plantFromSetDoc?.id);
        }
      } catch (error) {
        console.log("Error while ADD NEW PLANT: ", error);
      }
    }
  };

  const isDisabled = name != "" && photoUri != "";

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.mainSectionContainer}>
        <Text style={styles.title}>Que planta quieres agregar?</Text>
        <StyledTextInput
          viewStyle={styles.textInput}
          onChangeText={(name) => setName(name)}
          placeholder="Nombre de la planta"
        />

        <View style={styles.edibleContainer}>
          <Text style={styles.text}>Es comestible?</Text>

          {edible ? (
            <Pressable onPress={() => setEdible(!edible)}>
              <AntDesign name="checksquare" size={24} color={COLORS.green5} />
            </Pressable>
          ) : (
            <Pressable onPress={() => setEdible(!edible)}>
              <AntDesign name="closesquareo" size={24} color={COLORS.green1} />
            </Pressable>
          )}
        </View>

        <ImageSelector
          pickedUri={photoUri}
          onImage={(image: string) => setPhotoUri(image)}
        />
      </View>
      <LargeButton
        disabled={!isDisabled}
        onPress={async () => {
          await addNewPlant({
            name,
            edible,
            photoUri,
          });
          await dispatch(
            addPlantToLocalStore({
              id: currentId,
              name,
              edible,
              photoUri,
            } as Plant)
          );

          await setName("");
          await setPhotoUri("");
          await setEdible(false);
        }}
      >
        Add
      </LargeButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  mainSectionContainer: {
    height: heightPixel(600),
  },
  button: {
    backgroundColor: COLORS.green5,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
  },
  pressableText: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: COLORS.green5,
    fontSize: 20,
  },
  edibleContainer: {
    flexDirection: "row",
    width: widthPixel(350),
    height: heightPixel(50),
    marginBottom: heightPixel(40),
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textInput: {
    marginTop: heightPixel(20),
  },
  text: {
    color: COLORS.green5,
    fontFamily: "Quicksand-Regular",
    fontSize: fontPixel(16),
    paddingRight: widthPixel(20),
  },
  title: {
    color: COLORS.green5,
    fontFamily: "Nunito-Bold",
    fontSize: fontPixel(20),
    marginTop: 10,
  },
});
