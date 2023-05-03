import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { BottomTabs } from "./bottomTabs";
import { AuthStack } from "./auth";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux";

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

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function AppStack() {
  const session = useTypedSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      {session.status === "authenticated" ? <BottomTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppStack;
