import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLOR } from "../constants/index";
import { heightPixel, widthPixel } from "../utils/normalize";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileScreen">;

export function ProfileScreen({ navigation: { navigate } }: Props) {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Pressable onPress={() => navigate("LoginScreen")}>
        <Text>Profile Screen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLOR.fondo,
  },
  map: {
    flex: 1,
    width: widthPixel(390),
    height: heightPixel(840),
    borderRadius: widthPixel(30),
  },
  searchBar: {
    position: "absolute",
    width: widthPixel(370),
    height: heightPixel(50),
    borderRadius: widthPixel(30),
    backgroundColor: COLOR.fondo,
    alignItems: "center",
    justifyContent: "center",
    top: heightPixel(100),
    shadowColor: "#363636",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  searchBarInput: {
    width: widthPixel(320),
  },
});
