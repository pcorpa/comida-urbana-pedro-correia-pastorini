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
import { BottomTabs } from "./bottomTabs";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
     
    </Stack.Navigator>
  );
};
