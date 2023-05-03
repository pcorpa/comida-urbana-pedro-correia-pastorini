import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../constants/index";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import MapView from "react-native-maps";
import { StyledTextInput } from "../components";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const HomeScreen = ({ navigation: { navigate } }: Props) => {
  const plants = useTypedSelector((state: RootState) => state.plants);

  const NoPlantsHandle = () => (
    <View style={styles.noPlantContainer}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigate("AddPlantScreen")}>
          <Text style={styles.noPlantsTouchableText}>Tap aqui </Text>
        </TouchableOpacity>
        <Text style={styles.noPlantsText}>{`para agregar la primera :)`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <StyledTextInput
          viewStyle={{
            borderColor: COLORS.green2,
            paddingHorizontal: widthPixel(10),
          }}
          textInputStyle={styles.searchBarInput}
          placeholder="Busca la planta que te interesa"
        >
          <MCI name="magnify" size={24} color={COLORS.green5} />
        </StyledTextInput>
      </View>
      {!!plants && <NoPlantsHandle />}
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  map: {
    width: widthPixel(390),
    height: heightPixel(890),
  },
  searchBar: {
    width: widthPixel(370),
    height: heightPixel(50),
    borderRadius: widthPixel(30),
    backgroundColor: COLORS.green1,
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
    fontFamily: "Quicksand-Regular",
    fontSize: fontPixel(16),
    color: COLORS.green4,
    alignSelf: "flex-end",
    justifyContent: "center",
    width: widthPixel(320),
  },
  noPlantContainer: { flex: 1, alignSelf: "center", justifyContent: "center" },
  noPlantsTouchableText: {
    textAlign: "center",
    color: COLORS.green5,
    textDecorationColor: COLORS.green3,
    textDecorationLine: "underline",
    fontFamily: "Nunito-Bold",
    fontSize: fontPixel(16),
  },
  noPlantsText: {
    textAlign: "center",
    color: COLORS.green4,
    fontFamily: "Nunito-Regular",
    fontSize: fontPixel(16),
  },
});
