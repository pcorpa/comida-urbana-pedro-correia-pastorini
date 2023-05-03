import { View, Image, StyleSheet, SafeAreaView, Text } from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LargeButton } from "../components/index";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { COLORS } from "../constants/index";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux";

type Props = NativeStackScreenProps<RootStackParamList, "StartScreen">;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const StartScreen = ({ navigation: { navigate } }: Props) => {
  const [name, setName] = useState("");
  const [hiden, setHiden] = useState(true);
  const session = useTypedSelector((state: RootState) => state.auth);
  const icon = hiden ? "eye" : "eye-outline";

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.logoTextContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.logoText}>Cosecha</Text>
        <Text style={styles.logoText}>urbana</Text>
      </View>

      <View style={styles.buttonContainer}>
        <LargeButton onPress={() => navigate("LoginScreen")}>
          Ingresar
        </LargeButton>
        <LargeButton onPress={() => navigate("RegisterScreen")}>
          Registrarse
        </LargeButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  logo: {
    width: widthPixel(450),
    height: heightPixel(200),
    marginTop: heightPixel(40),
    resizeMode: "center",
  },
  logoText: {
    fontFamily: "Nunito-Bold",
    fontSize: fontPixel(35),
    color: COLORS.green4,
  },
  logoTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: heightPixel(70),
  },
  buttonContainer: {},
});
