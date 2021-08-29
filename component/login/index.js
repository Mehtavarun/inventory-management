import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../../styles";
import LoginForm from "./loginForm";

function Login(props) {
  return (
    <View style={[styles.loginContainer, styles.backgroundColor]}>
      <Text style={[styles.loginHeading, styles.font]}>Inventory</Text>
      <LoginForm />
    </View>
  );
}

export default Login;
