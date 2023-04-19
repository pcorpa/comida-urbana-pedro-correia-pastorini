import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { COLORS } from "../constants";
import { heightPixel, widthPixel } from "../utils/normalize";
import { RootState } from "../redux";
import { Plant, removePlant, selectPlant } from "../redux/slices/plantSlice";

type Props = NativeStackScreenProps<RootStackParamList, "MyPlantScreen">;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export function MyPlantScreen() {
  const dispatch = useDispatch();
  const plants = useTypedSelector(selectPlant);
  console.log("PLANTS: ", plants)
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      {plants  ? (
        plants.map((p: Plant) => (
          <TouchableOpacity key={p.id} onPress={() => dispatch(removePlant(p))}>
            <View
              style={{
                alignSelf: "center",
                backgroundColor: COLORS.green5,
                borderRadius: 10,
                padding: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ color: "red" }}>Tap to remove item</Text>
              <Text style={{ textAlign: "center", color: COLORS.green1 }}>
                NAME: {p.name}
              </Text>
              <Text style={{ textAlign: "center", color: COLORS.green1 }}>
                ID: {p.id}
              </Text>
              <Text style={{ textAlign: "center", color: COLORS.green1 }}>
                EDIBLE: {p.edible ? "Can be eaten" : "Don't eat"}
              </Text>
              <Image style={styles.image} source={{ uri: p.pictureUri }} />
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Aqui se mostraran las plantas que has agregado</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.green1,
  },
  image: {
    width: widthPixel(250),
    height: heightPixel(200),
    borderRadius: widthPixel(20),
  },
});
