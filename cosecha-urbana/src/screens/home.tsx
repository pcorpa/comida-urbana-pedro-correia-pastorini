import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../navigators/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../constants/index";
import { heightPixel, widthPixel } from "../utils/normalize";
import MapView from "react-native-maps";
import { StyledTextInput } from "../components";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export const HomeScreen = ({ navigation: { navigate } }: Props) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <StyledTextInput
          viewStyle={styles.searchBarInput}
          placeholder="Busca la plata que te interesa"
        >
          <MCI name="magnify" size={24} color={COLORS.green5} />
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
    backgroundColor: COLORS.green5,
  },
  map: {
    width: widthPixel(390),
    height: heightPixel(890),
  },
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
