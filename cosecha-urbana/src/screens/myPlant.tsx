import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { REMOVE_PLANT } from "../redux/types";

type Props = NativeStackScreenProps<RootStackParamList, "MyPlantScreen">;

export function MyPlantScreen() {
  const dispatch = useDispatch();
  const plants = useSelector((state: RootState) => state.plant);
  return (
    <View>
      <SafeAreaView />
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
