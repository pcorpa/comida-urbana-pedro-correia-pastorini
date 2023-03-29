import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { LargeButton, SearchBar, StyledTextInput } from "../components";
import { COLOR } from "../constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_PLANT, Plant, REMOVE_PLANT } from "../redux/types";
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
      <View style={styles.pressablesContainer}>
        <Pressable
          style={styles.testButton}
          onPress={() => addPlant({ id: 2, name: "chorola", edible: true })}
        >
          <Text style={styles.pressableText}>ADD</Text>
        </Pressable>
        {plants.map((p) => (
          <TouchableOpacity
            key={`${new Date()}`}
            onPress={() => dispatch({ type: REMOVE_PLANT, payload: p })}
          >
            <View
              style={{
                alignSelf: "center",
                backgroundColor: COLOR.green,
                borderRadius: 10,
                padding: 10,
                marginVertical: 10,
              }}
            >
              <Text style={styles.pressableText}>Tap to remove item</Text>
              <Text style={{ textAlign: "center" }}>NAME: {p.name}</Text>
              <Text style={{ textAlign: "center" }}>ID: {p.id}</Text>
              <Text style={{ textAlign: "center" }}>
                EDIBLE: {p.edible ? "Can be eaten" : "Don't eat"}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
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
  pressablesContainer: { top: 200 },
  testButton: {
    backgroundColor: COLOR.blue,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
  },
  pressableText: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: COLOR.fondo,
    fontSize: 20,
  },
});
