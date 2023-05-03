import "dotenv/config";

export default {
  expo: {
    name: "Cosecha Urbana",
    slug: "cosecha-urbana",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/logo.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: false,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#ffffff",
      },

      package: "com.cosechaUrbana.cosechaUrbana",
      versionCode: 1,
    },
    web: {
      favicon: "./assets/logo.png",
    },
    owner: "pedrocorreia",
    extra: {
      eas: {
        projectId: "ea0ea50e-ffe9-4b62-a754-78d9b7a28985",
      },
      firebaseApiKey: process.env.REACT_NATIVE_API_KEY,
      firebaseAuthDomain: process.env.REACT_NATIVE_AUTH_DOMAIN,
      firebaseDatabaseURL: process.env.REACT_NATIVE_DATABASE_URL,
      firebaseProjectId: process.env.REACT_NATIVE_PROJECT_ID,
      firebaseStorageBucket: process.env.REACT_NATIVE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.REACT_NATIVE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.REACT_NATIVE_APP_ID,
    },
  },
};
