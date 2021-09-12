import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../component/login";
import BarcodeScannerScreen from "../component/barcode";
import ProductListScreen from "../component/productList";
import ProductDetailsScreen from "../component/productDetails";
import ProductFormScreen from "../component/productForm";
import Header from "../component/header";
import {
  Login,
  BarcodeScanner,
  ProductList,
  ProductDetails,
  ProductForm,
} from "../component/utils/constants";

const Stack = createNativeStackNavigator();

function Routes() {
  const headerComp = (props) => <Header {...props} />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ProductList.route}
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
          name={ProductList.route}
          component={ProductListScreen}
          options={{ headerShown: true, title: ProductList.title }}
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
