import React from "react";
import { Appbar, withTheme } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import { BarcodeScanner, Cart } from "../utils/constants";

function Header(props) {
  const { route, options, theme, navigation } = props;

  return (
    <Appbar.Header theme={theme}>
      {navigation.canGoBack() && (
        <Appbar.BackAction
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
      )}
      <Appbar.Content title={options.title} />
      {route.name !== BarcodeScanner.route && (
        <Appbar.Action
          icon="barcode"
          onPress={() => navigation.navigate(BarcodeScanner.route)}
        />
      )}
      {route.name !== Cart.route && (
        <Appbar.Action
          icon="cart"
          onPress={() => navigation.navigate(Cart.route)}
        />
      )}
    </Appbar.Header>
  );
}

export default withTheme(Header);
