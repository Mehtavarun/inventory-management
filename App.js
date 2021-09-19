import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Navigation from "./navigation";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#027EEE",
    background: "#ECEFF1",
  },
};
