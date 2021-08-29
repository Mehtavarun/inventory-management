import React, { useEffect } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserObject, userType } from "./component/utils/util";

import Navigation from "./navigation";

export default function App() {
  useEffect(() => {
    const users = "users";
    (async () => {
      await AsyncStorage.setItem(
        users,
        JSON.stringify([getUserObject("admin", "admin", userType.ADMIN)])
      );
    })();
    return async function removeUser() {
      await AsyncStorage.removeItem(users);
      await AsyncStorage.removeItem("loggedIn");
    };
  });

  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
    secondary: "#546E7A",
    background: "#ECEFF1",
  },
};
