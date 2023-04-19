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
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { Session, register } from "../redux/slices/authSlice";

type Props = NativeStackScreenProps<RootStackParamList, "RegisterScreen">;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const RegisterScreen = ({ navigation: { navigate } }: Props) => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraceña] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const dispatch = useDispatch();
  const [hiden, setHiden] = useState(true);
  const session = useTypedSelector((state: RootState) => state.auth);

  const registerNewUser = (session: Session) => {
   dispatch(register(session));
  };

  const icon = hiden ? "eye" : "eye-outline";

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <StyledTextInput
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
      />
      <StyledTextInput
        onChangeText={(value) => setNombre(value)}
        placeholder="Nombre"
      />
      <StyledTextInput
        onChangeText={(value) => setApellido(value)}
        placeholder="Apellido"
      />
      <StyledTextInput
        onChangeText={(value) => setContraceña(value)}
        placeholder="Contraseña"
        secureTextEntry={hiden}
        spellCheck={false}
        autoComplete="password"
        autoCorrect={false}
        autoCapitalize="none"
      >
        <Pressable onPress={() => setHiden(!hiden)}>
          <MCI name={icon} size={24} color={COLORS.green3} />
        </Pressable>
      </StyledTextInput>
      <View style={styles.buttonContainer}>
        <LargeButton
          onPress={() => {
            registerNewUser({
              session: true,
              userEmail: email,
              userId: "1",
              userName: nombre,
              userLastName: apellido,
            });
            console.log("SESSION REGISTER: ", session);
          }}
        >
          Registrarse
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
