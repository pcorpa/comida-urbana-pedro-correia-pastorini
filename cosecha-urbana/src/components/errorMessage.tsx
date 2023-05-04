import { Text } from "react-native";
import { loginStyles } from "../constants/styles";
export const errorMessage = (
  message:
    | "Email invalido"
    | "Minimo 6 caracteres"
    | "Requerido"
    | "Ups :( Algo salio mal"
    | "Email o password incorrectos"
) => {
  return <Text style={loginStyles.errorText}>{message}</Text>;
};
