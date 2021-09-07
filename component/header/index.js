import React from "react";
import { Appbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IM_LOGGED_IN, LoginRoute } from "../utils/constants";

function Header(props) {
  const { navigation } = props;

  const handleLogout = async () => {
    await AsyncStorage.removeItem(IM_LOGGED_IN);
    navigation.reset({ index: 0, routes: [{ name: LoginRoute }] });
  };

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      {/* <Appbar.Content title="heh" /> */}
      <Appbar.Action icon="logout" onPress={handleLogout} />
    </Appbar.Header>
  );
}

export default Header;
