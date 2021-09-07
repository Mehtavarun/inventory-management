import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../component/login";
import BarcodeScannerScreen from "../component/barcode";
import ItemListScreen from "../component/itemList";
import ItemScreen from "../component/item";
import Header from "../component/header";
import {
  Login,
  BarcodeScanner,
  ItemList,
  Item,
} from "../component/utils/constants";

const Stack = createNativeStackNavigator();

function Routes() {
  const headerComp = (props) => <Header {...props} />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Login.route}
        screenOptions={{ header: (props) => headerComp(props) }}
      >
        <Stack.Screen
          name={Login.route}
          component={LoginScreen}
          options={{
            headerShown: false,
            title: Login.title,
          }}
        />
        <Stack.Screen
          name={BarcodeScanner.route}
          component={BarcodeScannerScreen}
          options={{ headerShown: true, title: BarcodeScanner.title }}
        />
        <Stack.Screen
          name={ItemList.route}
          component={ItemListScreen}
          options={{ headerShown: true, title: ItemList.title }}
        />
        <Stack.Screen
          name={Item.route}
          component={ItemScreen}
          options={{ headerShown: true, title: Item.title }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
