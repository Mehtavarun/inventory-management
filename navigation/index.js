import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../component/login";

const Stack = createNativeStackNavigator();

const LoginRoute = "Login";

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LoginRoute}>
        <Stack.Screen
          name={LoginRoute}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
