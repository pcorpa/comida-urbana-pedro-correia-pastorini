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
import { COLOR } from "../constants";
import { heightPixel } from "../utils/normalize";

const Tab = createBottomTabNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLOR.fondo,
    height: heightPixel(90),
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

export function BottomTabs() {
  return (
    <Tab.Navigator
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
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MCI
                name="account-outline"
                size={24}
                color={focused ? COLOR.green : COLOR.darkGray}
              />
              <Text
                style={{
                  color: focused ? COLOR.green : COLOR.darkGray,
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
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MCI
                name="magnify"
                size={24}
                color={focused ? COLOR.blue : COLOR.darkGray}
              />
              <Text
                style={{
                  color: focused ? COLOR.blue : COLOR.darkGray,
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
        name="AddTreeScreen"
        component={AddPlantScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MCI
                name="plus"
                size={24}
                color={focused ? COLOR.orange : COLOR.darkGray}
              />
              <Text
                style={{
                  color: focused ? COLOR.orange : COLOR.darkGray,
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
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MCI
                name="tree-outline"
                size={24}
                color={focused ? COLOR.green : COLOR.darkGray}
              />
              <Text
                style={{
                  color: focused ? COLOR.green : COLOR.darkGray,
                  fontFamily: "Nunito-Bold",
                }}
              >
                Mis Plantas
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
