import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { HomeScreen, LoginScreen, AddTreeScreen } from "../screens/index";
import { HomeStack } from "./home";

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  AddTreeScreen: undefined;
  MyPlantScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppStack() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default AppStack;
