import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { RootStackParamList } from "./appNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";
import {
  AddPlantScreen,
  HomeScreen,
  MyPlantScreen,
  ProfileScreen,
} from "../screens";
import { COLORS } from "../constants";
import { heightPixel, pixelSizeVertical, widthPixel } from "../utils/normalize";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.green5,
    height: heightPixel(120),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#363636",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "BottomTabs">;
export function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MCI
                name="account-outline"
                size={24}
                color={focused ? COLORS.green1 : COLORS.green2}
              />
              <Text
                style={{
                  color: focused ? COLORS.green1 : COLORS.green2,
                  fontFamily: "Nunito-Bold",
                }}
              >
                Perfil
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MCI
                name="magnify"
                size={24}
                color={focused ? COLORS.green1 : COLORS.green2}
              />
              <Text
                style={{
                  color: focused ? COLORS.green1 : COLORS.green2,
                  fontFamily: "Nunito-Bold",
                }}
              >
                Buscar
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddPlantScreen"
        component={AddPlantScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MCI
                name="plus"
                size={24}
                color={focused ? COLORS.green1 : COLORS.green2}
              />
              <Text
                style={{
                  color: focused ? COLORS.green1 : COLORS.green2,
                  fontFamily: "Nunito-Bold",
                }}
              >
                Agregar
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyPlantScreen"
        component={MyPlantScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MCI
                name="tree-outline"
                size={24}
                color={focused ? COLORS.green1 : COLORS.green2}
              />
              <Text
                style={{
                  color: focused ? COLORS.green1 : COLORS.green2,
                  fontFamily: "Nunito-Bold",
                  textAlign: "center",
                }}
              >
                Plantas
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
