import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "./appNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddPlantScreen,
  HomeScreen,
  LoginScreen,
  MyPlantScreen,
} from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddTreeScreen"
        component={AddPlantScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="MyPlantScreen"
        component={MyPlantScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
