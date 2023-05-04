import { StyleSheet, TextInputProps, View } from "react-native";
import React from "react";
import { StyledTextInput } from "./styledTextInput";
import { heightPixel, widthPixel } from "../utils/normalize";
import { COLORS } from "../constants";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";

interface Props extends TextInputProps {}

export function SearchBar({ placeholder, onChangeText }: Props) {
  return (
    <View style={styles.searchBar}>
      <StyledTextInput
        onChangeText={onChangeText}
        viewStyle={styles.searchBarInput}
        placeholder={placeholder}
      >
        <MCI name="magnify" size={24} color={COLORS.green5} />
      </StyledTextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    position: "absolute",
    width: widthPixel(370),
    height: heightPixel(50),
    borderRadius: widthPixel(30),
    backgroundColor: COLORS.green5,
    alignItems: "center",
    justifyContent: "center",
    top: heightPixel(100),
    shadowColor: "#363636",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  searchBarInput: {
    width: widthPixel(320),
  },
});
