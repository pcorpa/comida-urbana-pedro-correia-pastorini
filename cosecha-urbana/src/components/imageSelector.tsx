import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { Dispatch, useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";

interface Props {
  onImage: (image: string) => void;
  pickedUri: string;
}

const ImageSelector = ({ onImage, pickedUri }: Props) => {
  const VerifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes");
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await VerifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (image.assets) {
      onImage(image.assets[0].uri);
    } else {
      console.log("ERROR, NO HAY IMAGE");
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Pressable style={styles.preview} onPress={handlerTakeImage}>
          {!pickedUri ? (
            <View style={styles.noImageContainer}>
              <Text style={styles.noImageText}>Selecciona una imgen</Text>
              <Ionicons name="image" size={42} color={COLORS.green1} />
            </View>
          ) : (
            <View>
              <TouchableOpacity
                onPress={() => onImage("")}
                style={styles.remove}
              >
                <AntDesign
                  name="closecircleo"
                  size={28}
                  color={COLORS.green3}
                />
              </TouchableOpacity>
              <Image style={styles.image} source={{ uri: pickedUri }} />
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: widthPixel(350),
    marginTop: heightPixel(30),
  },
  preview: {
    width: widthPixel(350),
    height: heightPixel(200),
    marginBottom: heightPixel(40),
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.green3,
    borderWith: 1,
  },
  noImageContainer: {
    width: widthPixel(350),
    height: heightPixel(200),
    borderRadius: widthPixel(20),
    backgroundColor: COLORS.green4,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  noImageText: {
    color: COLORS.green1,
    fontSize: fontPixel(20),
    fontFamily: "Quicksand-Regular",
    paddingBottom: heightPixel(20),
  },
  image: {
    width: widthPixel(350),
    height: heightPixel(200),
    borderRadius: widthPixel(20),
  },
  remove: {
    position: "absolute",
    zIndex: 1000,
    width: widthPixel(30),
    height: heightPixel(30),
    borderRadius: widthPixel(100),
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
});
