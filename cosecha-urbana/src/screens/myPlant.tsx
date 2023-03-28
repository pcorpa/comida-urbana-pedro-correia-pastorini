import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "MyPlantScreen">;

export function MyPlantScreen() {
  return (
    <View>
      <SafeAreaView />
      <Text>MyPlantScreen</Text>
    </View>
  );
}
