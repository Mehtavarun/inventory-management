import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { BarCodeScanner } from "expo-barcode-scanner";
import { ProductDetails, ProductForm } from "../utils/constants";
import { existsByIdInProducts } from "../utils/service";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const { navigation } = props;

  useEffect(() => {
    // AsyncStorage.clear();
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    if (await existsByIdInProducts(data)) {
      navigation.navigate(ProductDetails.route, { productId: data });
    } else {
      navigation.navigate(ProductForm.route, { productId: data });
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Scanner;
