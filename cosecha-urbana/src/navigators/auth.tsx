import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "./appNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddPlantScreen,
  HomeScreen,
  LoginScreen,
  MyPlantScreen,
  RegisterScreen,
  StartScreen,
} from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="StartScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerBlurEffect: "light",
          title: "",
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
