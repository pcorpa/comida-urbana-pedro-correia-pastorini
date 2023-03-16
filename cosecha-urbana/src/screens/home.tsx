import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLOR } from "../constants/index";
import { heightPixel, widthPixel } from "../utils/normalize";
import MapView from "react-native-maps";
import { StyledTextInput } from "../components";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export const HomeScreen = ({ navigation: { navigate } }: Props) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.searchBar}>
        <StyledTextInput
          viewStyle={styles.searchBarInput}
          placeholder="Busca la plata que te interesa"
        >
          <MCI name="magnify" size={24} color={COLOR.darkGray} />
        </StyledTextInput>
      </View>
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLOR.fondo,
  },
  map: {
    flex: 1,
    width: widthPixel(390),
    height: heightPixel(840),
    borderRadius: widthPixel(30),
  },
  searchBar: {
    position: "absolute",
    width: widthPixel(370),
    height: heightPixel(50),
    borderRadius: widthPixel(30),
    backgroundColor: COLOR.fondo,
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