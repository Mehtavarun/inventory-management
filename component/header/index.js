import React from "react";
import { Appbar, withTheme } from "react-native-paper";
import Logout from "../logout";

function Header(props) {
  const { options, theme } = props;

  return (
    <Appbar.Header theme={theme}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={options.title} />
      <Logout />
    </Appbar.Header>
  );
}

export default withTheme(Header);
