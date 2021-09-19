import React from "react";
import { Appbar, withTheme } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

function Header(props) {
  const { options, theme, navigation } = props;

  return (
    <Appbar.Header theme={theme}>
      {navigation.canGoBack() && (
        <Appbar.BackAction
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
      )}
      <Appbar.Content title={options.title} />
    </Appbar.Header>
  );
}

export default withTheme(Header);
