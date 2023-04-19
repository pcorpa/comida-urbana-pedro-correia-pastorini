import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Text,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../constants/index";
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from "../utils/normalize";
import { LargeButton } from "../components";

import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { logout } from "../redux/slices/authSlice";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileScreen">;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export function ProfileScreen({ navigation: { navigate } }: Props) {
  const dispatch = useDispatch();
  const session = useTypedSelector((state: RootState) => state.auth);
  const logoutUser = () => {
    dispatch(logout(session));
  };

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
        onPress={() => {
          logoutUser();
          console.log("SESSION PROFILE: ", session);
        }}
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
    backgroundColor: COLORS.green5,
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
    color: COLORS.green5,
    textAlign: "center",
    paddingVertical: pixelSizeVertical(5),
  },
});
