import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React, { useEffect } from "react";
import { LargeButton, SearchBar, StyledTextInput } from "../components";
import { COLOR } from "../constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_PLANT, Plant } from "../redux/types";
import { initialState } from "../redux/reducers/plants.reducer";
import { RootState } from "../redux/reducers";

export function AddPlantScreen() {
  const dispatch = useDispatch();
  const plants = useSelector((state: RootState) => state.plant);
  const addPlant = (plant: Plant) => {
    dispatch({ type: ADD_PLANT, payload: plant });
  };
  const removePlant = (plant: Plant) => {
    dispatch({ type: REMOVE_PLANT, payload: plant });
  };
  useEffect(() => {
    console.log("INITIAL STATE:", plants);
  }, [plants]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SearchBar placeholder="Busca la planta que quieres agregar" />
      <Pressable
        onPress={() => addPlant({ id: 2, name: "chorola", edible: true })}
      >
        <Text>ADD</Text>
      </Pressable>
      <Pressable
        onPress={() => removePlant({ id: 2, name: "chorola", edible: true })}
      >
        <Text>REMOVE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLOR.fondo,
  },
});
