import React, { useState } from "react";
import { View, Text, Image, TouchableHighlight, TextInput } from "react-native";
import { Button } from "react-native-paper";
import styles from "../../styles";
import { ProductDetails } from "../utils/constants";

function CartItem(props) {
  const { navigation, item } = props;

  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <TouchableHighlight
      style={styles.productCart}
      onPress={() =>
        navigation.navigate({
          name: ProductDetails.route,
          params: { productId: item.id },
        })
      }
      underlayColor="#ECEFF1"
      activeOpacity={0.6}
    >
      <View style={styles.cartBox}>
        <View style={styles.productCartBox}>
          <View style={styles.productCartImageBox}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.productCartImage}
            />
          </View>
          <View style={styles.productCartDetailsBox}>
            <Text style={styles.productCartNameText}>{item.name}</Text>
            <View style={{ marginTop: 5 }}>
              <Text style={{ color: "#1976D2" }}>
                Added on: <Text style={{ fontWeight: "bold" }}>20-02-2021</Text>
              </Text>
            </View>
            <View style={styles.productCartDetailsRow2}>
              <View>
                <Text style={styles.productCartPriceText}>${item.price}</Text>
              </View>
              <View style={styles.productCartQuantityBox}>
                <Text
                  style={[
                    styles.productCartQuantityControlBtn,
                    { fontSize: 20 },
                  ]}
                  onPress={decrementQuantity}
                >
                  -
                </Text>
                <TextInput
                  style={styles.productCartQauntityTextInput}
                  value={quantity.toString()}
                />
                <Text
                  style={[
                    styles.productCartQuantityControlBtn,
                    { fontSize: 18 },
                  ]}
                  onPress={() => setQuantity(quantity + 1)}
                >
                  +
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#E9E9E9",
            width: "96%",
            marginTop: 5,
            alignSelf: "center",
          }}
        />
        <Button
          icon="delete"
          mode="contained"
          color="#fff"
          style={styles.productCartItemRemoveBtn}
          onPress={() => console.log("Pressed")}
        >
          REMOVE
        </Button>
      </View>
    </TouchableHighlight>
  );
}

export default CartItem;
