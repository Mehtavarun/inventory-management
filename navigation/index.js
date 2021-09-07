import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../component/login";
import BarcodeScannerScreen from "../component/barcode";
import ItemListScreen from "../component/itemList";
import ItemScreen from "../component/item";
import Header from "../component/header";
import {
  LoginRoute,
  BarcodeScannerRoute,
  ItemListRoute,
  ItemRoute,
} from "../component/utils/constants";

const Stack = createNativeStackNavigator();

function Routes() {
  const Header = () => <Header />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={LoginRoute}
        // screenOptions={{
        //   header: Header,
        // }}
      >
        <Stack.Screen
          name={LoginRoute}
          component={LoginScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={BarcodeScannerRoute}
          component={BarcodeScannerScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={ItemListRoute}
          component={ItemListScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={ItemRoute}
          component={ItemScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
