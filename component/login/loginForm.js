import React from "react";
import { View, Button } from "react-native";
import { TextInput, Surface } from "react-native-paper";
import styles from "../../styles";
import { withTheme } from "react-native-paper";

function LoginForm(props) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const { colors } = props.theme;

  const handleLogin = () => {
    console.log("login button clicked.");
  };

  return (
    <View style={[styles.loginForm]}>
      <Surface
        style={[styles.loginSurface, { backgroundColor: colors.secondary }]}
      >
        <TextInput
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
          style={[styles.loginInput]}
        />
        <TextInput
          label="Password"
          secureTextEntry={true}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          right={<TextInput.Icon name="eye" />}
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
    </View>
  );
}

export default withTheme(LoginForm);
