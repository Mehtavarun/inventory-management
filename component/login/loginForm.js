import React from "react";
import { View, Button } from "react-native";
import { TextInput, Surface, Text } from "react-native-paper";
import styles from "../../styles";
import { withTheme } from "react-native-paper";

function LoginForm(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [usernameErr, setUsernameErr] = React.useState("");
  const [passwordErr, setPasswordErr] = React.useState("");
  const [loginErr, setLoginErr] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const { colors } = props.theme;

  const handleLogin = () => {
    if (isValidated()) {
      resetErrors();
      props.handleLogin(username, password, handleInvalidUser);
    }
  };

  const handleInvalidUser = (msg) => {
    setLoginErr(msg);
  };

  const isValidated = () => {
    let validated = true;
    if (username.trim().length === 0) {
      setUsernameErr("Username is required/invalid.");
      validated = false;
    }
    if (password.length === 0) {
      setPasswordErr("Password is required.");
      validated = false;
    }
    return validated;
  };

  const resetErrors = () => {
    setUsernameErr("");
    setPasswordErr("");
  };

  const passwordEyeIcon = (
    <TextInput.Icon
      name="eye"
      color={secureTextEntry ? "#000" : "#B0BEC5"}
      onPressOut={() => setSecureTextEntry(!secureTextEntry)}
    />
  );

  return (
    <Surface
      style={[styles.loginSurface, { backgroundColor: colors.secondary }]}
    >
      <Text color="red">{loginErr}</Text>
      <TextInput
        onChangeText={setUsername}
        label="Username"
        value={username}
        placeholder="Username"
        style={[styles.loginInput]}
        error={usernameErr.length !== 0}
      />
      <TextInput
        label="Password"
        secureTextEntry={secureTextEntry}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        error={passwordErr.length !== 0}
        right={passwordEyeIcon}
        style={[styles.loginInput]}
      />
      <View style={[styles.loginButton]}>
        <Button
          title="Login"
          onPress={handleLogin}
          style={[styles.loginButton]}
          color="#263238"
        />
      </View>
    </Surface>
  );
}

export default withTheme(LoginForm);
