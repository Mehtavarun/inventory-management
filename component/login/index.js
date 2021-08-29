import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Text } from "react-native-paper";
import styles from "../../styles";
import LoginForm from "./loginForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserObject } from "../utils/util";

function Login() {
  const handleLogin = async (username, password, handleInvalidUser) => {
    const usersStr = await AsyncStorage.getItem("users");
    const users = JSON.parse(usersStr);
    let userFound = false;
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.username === username) {
        userFound = true;
        if (user.password === password) {
          await AsyncStorage.setItem(
            "loggedIn",
            JSON.stringify(getUserObject(username, password))
          );
          handleInvalidUser("");
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.loginForm]}>
            <Text style={[styles.loginHeading, styles.font]}>Inventory</Text>
            <LoginForm handleLogin={handleLogin} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Login;
