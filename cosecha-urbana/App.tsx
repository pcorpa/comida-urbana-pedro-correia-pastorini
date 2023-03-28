import AppStack from "./src/navigators/appNavigator";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { hideAsync } from "expo-splash-screen";
import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./src/redux";

const App: FC = () => {
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

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
