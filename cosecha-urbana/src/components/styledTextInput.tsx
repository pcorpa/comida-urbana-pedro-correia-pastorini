import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { COLORS } from "../constants/index";

interface Props extends TextInputProps {
  children?: JSX.Element;
  textInputStyle?: {};
  viewStyle?: {};
}

export const StyledTextInput = ({
  placeholder,
  onChangeText,
  children,
  textInputStyle,
  viewStyle,
}: Props) => {
  return (
    <View style={[styles.container, viewStyle]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.green1}
        style={[styles.textInput, textInputStyle]}
      ></TextInput>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: heightPixel(1),
    borderColor: COLORS.green1,
    width: widthPixel(350),
    height: heightPixel(40),
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: heightPixel(4),
    marginBottom: heightPixel(10),
  },
  textInput: {
    fontFamily: "Quicksand-Regular",
    fontSize: fontPixel(16),
    color: COLORS.green1,
  },
});
