import React, { useEffect } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserObject, userType } from "./component/utils/util";
import { IM_LOGGED_IN, IM_USERS } from "./component/utils/constants";
import Navigation from "./navigation";

export default function App() {
  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem(
        IM_USERS,
        JSON.stringify([getUserObject("admin", "admin", userType.ADMIN)])
      );
    })();
    return async function removeUser() {
      await AsyncStorage.removeItem(IM_USERS);
      await AsyncStorage.removeItem(IM_LOGGED_IN);
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
    primary: "#546E7A",
    background: "#ECEFF1",
  },
};
