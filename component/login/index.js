import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { Text } from "react-native-paper";
import styles from "../../styles";
import LoginForm from "./loginForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserObject } from "../utils/util";
import { IM_LOGGED_IN, IM_USERS } from "../utils/constants";
import { BarcodeScannerRoute } from "../utils/constants";

function Login(props) {
  const { navigation } = props;

  const handleLogin = async (username, password, handleInvalidUser) => {
    const usersStr = await AsyncStorage.getItem(IM_USERS);
    const users = JSON.parse(usersStr);
    let userFound = false;
    for (let i = 0; i < users.length; i++) {
      const userDB = users[i];
      if (userDB.username.toLowerCase() === username.trim().toLowerCase()) {
        userFound = true;
        if (userDB.password === password) {
          await AsyncStorage.setItem(
            IM_LOGGED_IN,
            JSON.stringify(getUserObject(username, password))
          );
          handleInvalidUser("");
          navigation.navigate(BarcodeScannerRoute);
        } else {
          handleInvalidUser("Invalid password.");
        }
        break;
      }
    }
    if (!userFound) {
      handleInvalidUser("No user found.");
    }
  };

  return (
    <View style={[styles.loginContainer, styles.backgroundColor]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={[styles.loginForm]}>
          <Text style={[styles.loginHeading, styles.font]}>Inventory</Text>
          <LoginForm handleLogin={handleLogin} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Login;
