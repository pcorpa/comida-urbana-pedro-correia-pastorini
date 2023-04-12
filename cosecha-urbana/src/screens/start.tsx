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
  
  type Props = NativeStackScreenProps<RootStackParamList, "StartScreen">;
  
  export const StartScreen = ({ navigation: { navigate } }: Props) => {
    const [name, setName] = useState("");
    const [hiden, setHiden] = useState(true);
  
    const icon = hiden ? "eye" : "eye-outline";
  
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <Image source={require("../../assets/logo.png")} style={styles.logo} />        
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
    container: { flex: 1, alignItems: "center", justifyContent: "flex-start" },
    logo: {
      width: widthPixel(450),
      height: heightPixel(450),
      resizeMode: "contain",
    },
    textInputPlaceholder: {
      fontFamily: "Quicksand-Regular",
      fontSize: fontPixel(14),
      color: COLORS.green5,
    },
    buttonContainer: {
      marginTop: heightPixel(20),
    },
  });
  