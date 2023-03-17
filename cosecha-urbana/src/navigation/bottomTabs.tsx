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
import { heightPixel, pixelSizeVertical, widthPixel } from "../utils/normalize";

const Tab = createBottomTabNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLOR.fondo,
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
                backgroundColor: focused ? COLOR.green : COLOR.fondo,
                borderRadius: heightPixel(100),
                paddingHorizontal: widthPixel(16),
                marginTop: pixelSizeVertical(15),
              }}
            >
              <MCI
                name="account-outline"
                size={24}
                color={focused ? COLOR.fondo : COLOR.darkGray}
              />
              <Text
                style={{
                  color: focused ? COLOR.fondo : COLOR.darkGray,
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
                backgroundColor: focused ? COLOR.blue : COLOR.fondo,
                borderRadius: heightPixel(100),
                paddingHorizontal: widthPixel(11),
                marginTop: pixelSizeVertical(15),
              }}
            >
              <MCI
                name="magnify"
                size={24}
                color={focused ? COLOR.fondo : COLOR.darkGray}
              />
              <Text
                style={{
                  color: focused ? COLOR.fondo : COLOR.darkGray,
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
                backgroundColor: focused ? COLOR.orange : COLOR.fondo,
                borderRadius: heightPixel(100),
                paddingHorizontal: widthPixel(7),
                marginTop: pixelSizeVertical(15),
              }}
            >
              <MCI
                name="plus"
                size={24}
                color={focused ? COLOR.fondo : COLOR.darkGray}
              />
              <Text
                style={{
                  color: focused ? COLOR.fondo : COLOR.darkGray,
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
                backgroundColor: focused ? COLOR.green : COLOR.fondo,
                borderRadius: heightPixel(100),
                paddingHorizontal: widthPixel(8),
                marginTop: pixelSizeVertical(15),
              }}
            >
              <MCI
                name="tree-outline"
                size={24}
                color={focused ? COLOR.fondo : COLOR.darkGray}
              />
              <Text
                style={{
                  color: focused ? COLOR.fondo : COLOR.darkGray,
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
