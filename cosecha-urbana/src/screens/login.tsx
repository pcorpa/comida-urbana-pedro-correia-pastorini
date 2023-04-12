import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LargeButton, StyledTextInput } from "../components/index";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { COLORS } from "../constants/index";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

export const LoginScreen = ({ navigation: { navigate } }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hiden, setHiden] = useState(true);

  const icon = hiden ? "eye" : "eye-outline";

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <StyledTextInput placeholder="Email" />
      <StyledTextInput placeholder="Password">
        <Pressable onPress={() => setHiden(!hiden)}>
          <MCI name={icon} size={24} color={COLORS.green3} />
        </Pressable>
      </StyledTextInput>
      <View style={styles.buttonContainer}>
        <LargeButton onPress={() => navigate("HomeScreen")}>
          Ingresar
        </LargeButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.green5,
  },
  logo: {
    width: widthPixel(200),
    height: heightPixel(200),
    resizeMode: "contain",
    marginBottom: heightPixel(50),
  },
  textInputPlaceholder: {
    fontFamily: "Quicksand-Regular",
    fontSize: fontPixel(14),
    color: COLORS.green2,
  },
  buttonContainer: {
    marginTop: heightPixel(50),
  },
});
