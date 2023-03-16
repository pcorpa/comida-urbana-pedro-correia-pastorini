import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableProps,
} from "react-native";
import React from "react";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { COLOR } from "../constants";

interface Props extends PressableProps {
  children: string;
  
}
export const LargeButton = ({ children: title, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: widthPixel(370),
    height: heightPixel(50),
    backgroundColor: COLOR.blue,
    borderRadius: widthPixel(30),
    justifyContent: "center",
    alignItems: "center",
    marginTop: heightPixel(10),
  },
  buttonText: {
    fontFamily: "Nunito-Bold",
    fontSize: fontPixel(20),
    color: COLOR.fondo,
  },
});
