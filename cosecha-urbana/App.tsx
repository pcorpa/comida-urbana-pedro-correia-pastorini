import AppStack from "./src/navigation/appNavigator";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { hideAsync } from "expo-splash-screen";
import { useEffect } from "react";

export default function App() {
  const [loaded] = useFonts({
    "Nunito-Bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <AppStack />;
}
