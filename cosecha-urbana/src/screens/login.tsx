import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LargeButton, StyledTextInput } from "../components/index";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { COLOR } from "../constants/index";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

export const LoginScreen = ({ navigation: { navigate } }: Props) => {
  const [name, setName] = useState("");
  const [hiden, setHiden] = useState(true);

  const icon = hiden ? "eye" : "eye-outline";

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <StyledTextInput placeholder="Nombre y apellido" />
      <StyledTextInput placeholder="Email">
        <Pressable onPress={() => setHiden(!hiden)}>
          <MCI name={icon} size={24} color={COLOR.darkGray} />
        </Pressable>
      </StyledTextInput>
      <View style={styles.buttonContainer}>
        <LargeButton onPress={() => navigate("HomeScreen")}>
          Ingresar
        </LargeButton>
        <LargeButton onPress={() => navigate("AddTreeScreen")}>
          Registrarse
        </LargeButton>
        <LargeButton onPress={() => navigate("MyPlantScreen")}>
          Regi
        </LargeButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  logo: {
    width: widthPixel(80),
    height: heightPixel(195),
    resizeMode: "contain",
  },
  textInputPlaceholder: {
    fontFamily: "Quicksand-Regular",
    fontSize: fontPixel(14),
    color: COLOR.darkGray,
  },
  buttonContainer: {
    marginTop: heightPixel(20),
  },
});
