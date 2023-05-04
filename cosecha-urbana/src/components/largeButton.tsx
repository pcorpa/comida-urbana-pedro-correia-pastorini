import { Text, Pressable, StyleSheet, PressableProps } from "react-native";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { COLORS } from "../constants";

interface Props extends PressableProps {
  children: string;
  pressableStyle?: {};
}
export const LargeButton = ({
  children: title,
  onPress,
  pressableStyle,
  disabled,
}: Props) => {
  const styles = StyleSheet.create({
    button: {
      width: widthPixel(370),
      height: heightPixel(50),
      backgroundColor: disabled ? "#d6d3d1" : COLORS.green4,
      borderRadius: widthPixel(30),
      justifyContent: "center",
      alignItems: "center",
      marginTop: heightPixel(10),
    },
    buttonText: {
      fontFamily: "Nunito-Bold",
      fontSize: fontPixel(20),
      color: disabled ? COLORS.green2 : COLORS.green1,
    },
  });
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, pressableStyle]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
