import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, Alert } from "react-native";
import { Button } from "react-native-paper";
import styles from "../../styles";
import CartItem from "../cartItem";
import { CartItems } from "../utils/constants";
import { getJSONItem, getProductsByIds, setJSONItem } from "../utils/service";

function Cart(props) {
  const { navigation } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function setUserItems() {
      const itemsIds = await getJSONItem(CartItems);
      const userItems = await getProductsByIds(itemsIds);
      if (userItems !== null && userItems !== undefined) {
        setItems(userItems);
      }
    }
    setUserItems();
  }, []);

  const handleClearCart = () => {
    if (items.length === 0) {
      return;
    }
    Alert.alert("Clear all items from cart?", "", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setItems([]);
          setJSONItem(CartItems, []);
        },
      },
    ]);
  };

  const handleDeleteItem = (id) => {
    const oldItems = [...items];
    const newItems = oldItems.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <SafeAreaView style={styles.productListContainer}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            navigation={navigation}
            deleteItem={handleDeleteItem}
          />
        )}
        keyExtractor={(item) => item.id}
        style={{ flex: 1, flexDirection: "column" }}
      />
      <Button
        mode="contained"
        color="#D32F2F"
        onPress={handleClearCart}
        disabled={items.length === 0}
      >
        CLEAR CART
      </Button>
    </SafeAreaView>
  );
}

export default Cart;
