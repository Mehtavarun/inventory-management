import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BarcodeScannerScreen from "../component/barcode";
import CartScreen from "../component/cart";
import ProductDetailsScreen from "../component/productDetails";
import ProductFormScreen from "../component/productForm";
import Header from "../component/header";
import {
  BarcodeScanner,
  Cart,
  ProductDetails,
  ProductForm,
} from "../component/utils/constants";

const Stack = createNativeStackNavigator();

function Routes() {
  const headerComp = (props) => <Header {...props} />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ProductForm.route}
        screenOptions={{ header: (props) => headerComp(props) }}
      >
        <Stack.Screen
          name={BarcodeScanner.route}
          component={BarcodeScannerScreen}
          options={{ headerShown: true, title: BarcodeScanner.title }}
        />
        <Stack.Screen
          name={Cart.route}
          component={CartScreen}
          options={{ headerShown: true, title: Cart.title }}
        />
        <Stack.Screen
          name={ProductDetails.route}
          component={ProductDetailsScreen}
          options={{ headerShown: true, title: ProductDetails.title }}
        />
        <Stack.Screen
          name={ProductForm.route}
          component={ProductFormScreen}
          options={{ headerShown: true, title: ProductForm.title }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
