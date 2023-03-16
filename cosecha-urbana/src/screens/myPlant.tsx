import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "MyPlantScreen">;

export function MyPlantScreen() {
  return (
    <View>
      <Text>MyPlantScreen</Text>
    </View>
  );
}
