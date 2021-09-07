import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IM_LOGGED_IN, Login } from "../utils/constants";
import { Appbar, withTheme } from "react-native-paper";

function Logout(props) {
  const { theme } = props;
  const handleLogout = async () => {
    await AsyncStorage.removeItem(IM_LOGGED_IN);
    navigation.reset({ index: 0, routes: [{ name: Login.route }] });
  };

  return (
    <Appbar.Action
      icon="logout"
      onPress={handleLogout}
      color={theme.colors.background}
    />
  );
}

export default withTheme(Logout);
