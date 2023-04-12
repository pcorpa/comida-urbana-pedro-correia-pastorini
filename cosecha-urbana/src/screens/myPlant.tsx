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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { REMOVE_PLANT } from "../redux/types";
import { COLORS } from "../constants";
import { heightPixel, widthPixel } from "../utils/normalize";

type Props = NativeStackScreenProps<RootStackParamList, "MyPlantScreen">;

export function MyPlantScreen() {
  const dispatch = useDispatch();
  const plants = useSelector((state: RootState) => state.plant);
  return (
    <View>
      <SafeAreaView />
      {plants.map((p) => (
        <TouchableOpacity
          key={`${new Date()}`}
          onPress={() => dispatch({ type: REMOVE_PLANT, payload: p })}
        >
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
      ))}
      <Text>MyPlantScreen</Text>
      {plants.map((p) => (
        <TouchableOpacity
          onPress={() => dispatch({ type: REMOVE_PLANT, payload: p })}
        >
          <View>
            <Text>{p.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: widthPixel(250),
    height: heightPixel(200),
    borderRadius: widthPixel(20),
  },
});
