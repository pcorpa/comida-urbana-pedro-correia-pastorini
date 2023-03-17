import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Text,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLOR } from "../constants/index";
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from "../utils/normalize";
import { LargeButton } from "../components";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileScreen">;

export function ProfileScreen({ navigation: { navigate } }: Props) {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image
        source={require("../../assets/images/plant2.jpg")}
        style={styles.profilePicture}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Pedro Correia</Text>
        <Text style={styles.text}>P.correia.pastorini@gmail.com</Text>
      </View>
      <LargeButton
        pressableStyle={{ marginTop: heightPixel(100) }}
        onPress={() => navigate("LoginScreen")}
      >
        Salir
      </LargeButton>
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
  profilePicture: {
    width: widthPixel(120),
    height: heightPixel(120),
    borderRadius: widthPixel(25),
    marginTop: pixelSizeVertical(100),
  },
  textContainer: {
    marginTop: heightPixel(40),
  },
  text: {
    fontFamily: "Quicksand-Regular",
    fontSize: fontPixel(20),
    color: COLOR.darkGray,
    textAlign: "center",
    paddingVertical: pixelSizeVertical(5),
  },
});
