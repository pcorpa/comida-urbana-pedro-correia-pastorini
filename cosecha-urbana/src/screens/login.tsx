import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  LargeButton,
  StyledTextInput,
  errorMessage,
} from "../components/index";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { COLORS } from "../constants/index";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";
import { useForm } from "../hooks";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { checkingCredentials, login, logout } from "../redux/slices/authSlice";
import { RootState } from "../redux";
import { useSelector } from "react-redux";
import { signInWithEmailPassword } from "../firebase/authProviders";
import { loginStyles } from "../constants/styles";

type Props = NativeStackScreenProps<RootStackParamList, "LoginScreen">;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const LoginScreen = ({ navigation: { navigate } }: Props) => {
  const session = useTypedSelector((state: RootState) => state.auth);
  const [hiden, setHiden] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const dispatch = useDispatch();

  const { onChange, email, password } = useForm({
    email: "",
    password: "",
  });
  const allFormFieldsValid = emailValid && passwordValid;
  const loginWithEmailPassword = async () => {
    if (email === "" || password === "") {
      dispatch(logout(null));
      return;
    }
    dispatch(checkingCredentials());
    const { ok, error, uid, emailFromFirebase, displayName, photoURL } =
      await signInWithEmailPassword(email, password);
    if (!ok) {
      console.log("ERROR: ", error);
      dispatch(logout(`${error}`));
    }
    if (ok) {
      dispatch(
        login({
          ...session,
          status: "authenticated",
          token: uid!,
          user: {
            userId: uid!,
            userEmail: emailFromFirebase!,
            userName: displayName!,
            userLastName: displayName!,
            photoURL: photoURL!,
          },
        })
      );
    }
  };

  const icon = hiden ? "eye-outline" : "eye";

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={loginStyles.container}>
          <SafeAreaView />
          <Image
            source={require("../../assets/logo.png")}
            style={loginStyles.logo}
          />
          <StyledTextInput
            onChangeText={(value) => {
              onChange(value, "email");
              value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
                ? setEmailValid(true)
                : setEmailValid(false);
            }}
            placeholder="Email"
          />
          <View style={loginStyles.errorContainer}>
            {!emailValid && errorMessage("Email invalido")}
          </View>
          <StyledTextInput
            onChangeText={(value) => {
              onChange(value, "password");
              value.length <= 5
                ? setPasswordValid(false)
                : setPasswordValid(true);
            }}
            secureTextEntry={hiden}
            placeholder="Password"
          >
            <Pressable onPress={() => setHiden(!hiden)}>
              <MCI name={icon} size={24} color={COLORS.green3} />
            </Pressable>
          </StyledTextInput>
          <View style={loginStyles.errorContainer}>
            {!passwordValid && errorMessage("Minimo 6 caracteres")}
          </View>

          <View style={loginStyles.buttonContainer}>
            <LargeButton
              disabled={
                !allFormFieldsValid || session.status === "checking"
                  ? true
                  : false
              }
              onPress={() => {
                loginWithEmailPassword();
              }}
            >
              Ingresar
            </LargeButton>
            <View
              style={[loginStyles.errorContainer, { alignItems: "center" }]}
            >
              {!allFormFieldsValid ||
              session.errorMessage === "Email o password incorrectos" ? (
                errorMessage("Email o password incorrectos")
              ) : (
                <></>
              )}
            </View>
          </View>

          <View style={{ paddingBottom: heightPixel(100) }} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
