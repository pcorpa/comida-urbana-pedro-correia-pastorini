import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: widthPixel(300),
    height: heightPixel(200),
    resizeMode: "center",
    marginBottom: heightPixel(20),
  },
  textInputPlaceholder: {
    fontFamily: "Quicksand-Regular",
    fontSize: fontPixel(14),
    color: COLORS.green2,
  },
  buttonContainer: {
    marginTop: heightPixel(50),
  },
  errorContainer: {
    width: widthPixel(350),
    height: heightPixel(30),
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "center",
  },
  errorText: {
    textAlign: "left",
    fontFamily: "Quicksand-Regular",
    fontSize: fontPixel(16),
    color: COLORS.green5,
  },
});
