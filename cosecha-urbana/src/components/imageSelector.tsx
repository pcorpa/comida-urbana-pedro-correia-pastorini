import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { COLORS } from "../constants";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { useDispatch } from "react-redux";

interface Props {
  onImage: (image: string) => void;
}

const ImageSelector = ({ onImage }: Props) => {
  const [pickedUri, setPickedUri] = useState<string>("");
  const dispatch = useDispatch();

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
      console.log("IMAGE: ", image.assets[0]);
      setPickedUri(image.assets[0].uri);
      onImage(image.assets[0].uri);
    } else {
      console.log("ERROR, NO HAY IMAGE");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <View style={styles.noImageContainer}>
            <Text style={styles.noImageText}>
              No hay imagen seleccionada...
            </Text>
          </View>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
      <View style={styles.pressableContainer}>
        <Pressable style={styles.pressable} onPress={handlerTakeImage} />

        <Text style={styles.text}>Tomar foto</Text>
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
  },
  image: {
    width: widthPixel(250),
    height: heightPixel(200),
    borderRadius: widthPixel(20),
  },
  pressableContainer: {
    width: widthPixel(100),
    height: heightPixel(100),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    width: widthPixel(50),
    height: heightPixel(50),
    borderRadius: 100,
    marginBottom: heightPixel(10),
    backgroundColor: COLORS.green1,
  },
  text: {
    color: COLORS.green1,
    textAlign: "center",
  },
});
