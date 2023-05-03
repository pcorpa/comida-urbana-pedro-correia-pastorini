import {
  View,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
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
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { checkingCredentials, login, logout } from "../redux/slices/authSlice";
import { useForm } from "../hooks";
import { createUserWithEmailPassword } from "../firebase/authProviders";
import { loginStyles } from "../constants/styles";
import { getAuth, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

type Props = NativeStackScreenProps<RootStackParamList, "RegisterScreen">;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const formFields = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

export const RegisterScreen = ({ navigation: { navigate } }: Props) => {
  const dispatch = useDispatch();
  const [hiden, setHiden] = useState(true);
  const session = useTypedSelector((state: RootState) => state.auth);
  const [nameValid, setNameValid] = useState(true);
  const [surnameValid, setSurnameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const { name, surname, email, password, onChange } = useForm(formFields);

  const allFormFieldsValid =
    nameValid && surnameValid && emailValid && passwordValid;

  const registerNewUser = async (
    name: string,
    surname: string,
    email: string,
    password: string
  ) => {
    dispatch(checkingCredentials());
    const { ok, emailFromFirebase, error, uid } =
      await createUserWithEmailPassword({
        name,
        surname,
        email,
        password,
      });

    if (await !ok) {
      dispatch(logout(`${error}`));
    }
    console.log("OK", ok);
    if (await ok) {
      await updateProfile(FirebaseAuth.currentUser!, {
        displayName: `${name} ${surname}`,
      });
      await dispatch(
        login({
          ...session,
          errorMessage: null,
          user: {
            userEmail: emailFromFirebase!,
            userId: uid!,
            userName: name,
            userLastName: surname,
            photoURL: null,
          },
        })
      );
    }
  };

  const icon = hiden ? "eye" : "eye-outline";

  return (
    <View style={loginStyles.container}>
      <SafeAreaView />
      <Image
        source={require("../../assets/logo.png")}
        style={loginStyles.logo}
      />
      <StyledTextInput
        onChangeText={(value) => {
          onChange(value, "name");
          value.length <= 0 ? setNameValid(false) : setNameValid(true);
        }}
        placeholder="Nombre"
      />
      <View style={loginStyles.errorContainer}>
        {!nameValid && errorMessage("Requerido")}
      </View>
      <StyledTextInput
        onChangeText={(value) => {
          onChange(value, "surname");
          value.length <= 0 ? setSurnameValid(false) : setSurnameValid(true);
        }}
        placeholder="Appellido"
      />
      <View style={loginStyles.errorContainer}>
        {!surnameValid && errorMessage("Requerido")}
      </View>
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
          value.length <= 5 ? setPasswordValid(false) : setPasswordValid(true);
        }}
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
      <View style={loginStyles.errorContainer}>
        {!passwordValid && errorMessage("Minimo 6 caracteres")}
      </View>

      <View style={loginStyles.buttonContainer}>
        <LargeButton
          disabled={
            !allFormFieldsValid || session.status === "checking" ? true : false
          }
          onPress={() => registerNewUser(name, surname, email, password)}
        >
          Registrarse
        </LargeButton>
        <View style={[loginStyles.errorContainer, { alignItems: "center" }]}>
          {!allFormFieldsValid && errorMessage("Ups :( Algo salio mal")}
        </View>
      </View>
    </View>
  );
};
