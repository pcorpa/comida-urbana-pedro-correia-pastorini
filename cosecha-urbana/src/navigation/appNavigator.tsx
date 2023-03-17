import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { BottomTabs } from "./bottomTabs";
import { HomeStack } from "./home";

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  AddPlantScreen: undefined;
  MyPlantScreen: undefined;
  ProfileScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppStack() {
  const [user, setUser] = useState(false);
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}

export default AppStack;
