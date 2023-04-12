import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { BottomTabs } from "./bottomTabs";
import { AuthStack } from "./auth";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export type RootStackParamList = {
  LoginScreen: undefined;
  StartScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen: undefined;
  HomeTab: undefined;
  AddPlantScreen: undefined;
  MyPlantScreen: undefined;
  ProfileScreen: undefined;
  BottomTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppStack() {
  const session = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      {session.session ? <BottomTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppStack;
