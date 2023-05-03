import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Plant, removePlant } from "../redux/slices/plantSlice";
import { Ionicons } from "@expo/vector-icons";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import { COLORS } from "../constants";
import { useDispatch } from "react-redux";

export const PlantCard = ({ id, name, edible, photoUri }: Plant) => {
  const dispatch = useDispatch();
  return (
    <View key={id} style={styles.card}>
      <Image style={styles.image} source={{ uri: photoUri }} />
      <View style={styles.plantData}>
        <Text style={styles.text}>NAME: {name}</Text>
        <Text style={styles.text}>
          EDIBLE: {edible ? "Can be eaten" : "Don't eat"}
        </Text>
        <Text style={[styles.text, { paddingBottom: 0 }]}>ID: {id}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.deleteIcon}
          onPress={() => dispatch(removePlant({ id, name, edible, photoUri }))}
        >
          <Ionicons name="trash-outline" size={24} color={COLORS.green1} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.green1,
  },
  card: {
    flexDirection: "row",
    width: widthPixel(375),
    alignSelf: "center",
    backgroundColor: COLORS.green5,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  deleteIcon: {
    width: widthPixel(20),
    alignSelf: "flex-end",
    borderRightColor: "red",
  },
  plantData: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: widthPixel(235),
    paddingLeft: widthPixel(10),
  },
  text: {
    textAlign: "center",
    color: COLORS.green1,
    fontFamily: "Nunito-Regular",
    fontSize: fontPixel(16),
    paddingVertical: heightPixel(5),
  },
  image: {
    width: widthPixel(100),
    height: heightPixel(100),
    borderRadius: widthPixel(20),
  },
});
