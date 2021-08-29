import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  font: {
    fontFamily: "sans-serif",
    fontSize: 54,
    fontWeight: "300",
    lineHeight: 58,
  },
  loginHeading: {
    marginBottom: 60,
    color: "#546E7A",
  },
  loginInput: {
    marginBottom: 6,
    marginTop: 4,
  },
  loginButton: {
    marginTop: 15,
  },
  backgroundColor: {
    backgroundColor: "#ECEFF1",
  },
  loginContainer: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  loginForm: {
    justifyContent: "center",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  loginSurface: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: "center",
    elevation: 10,
    borderRadius: 7,
  },
  keyboardContainer: {
    flex: 1,
  },
});
