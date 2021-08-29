import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  font: {
    fontFamily: "sans-serif",
    fontSize: 54,
    fontWeight: "300",
    lineHeight: 58,
  },
  loginHeading: {
    textAlign: "center",
    height: Dimensions.get("window").height - 270,
    marginBottom: -450,
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
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  loginForm: {
    marginLeft: Dimensions.get("window").width / 30,
    marginRight: Dimensions.get("window").width / 30,
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
});
