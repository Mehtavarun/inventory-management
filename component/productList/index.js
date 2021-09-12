import React from "react";
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import styles from "../../styles";
import { ProductDetails } from "../utils/constants";
import Pagination from "./pagination";

function ProductList(props) {
  const { navigation } = props;

  const renderItem = ({ item }) => (
    <TouchableHighlight
      style={styles.productListItem}
      onPress={() =>
        navigation.navigate({
          name: ProductDetails.route,
          params: { productId: item.id },
        })
      }
      underlayColor="#ECEFF1"
      activeOpacity={0.6}
    >
      <View style={styles.productListItemBox}>
        <View style={styles.productListItemImageBox}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.productListItemImage}
          />
        </View>
        <View style={styles.productListItemDetailsBox}>
          <View style={styles.productListItemNameBox}>
            <Text style={styles.productListItemNameText}>{item.name}</Text>
          </View>
          <View style={styles.productListItemDetailsRow2}>
            <Text style={styles.productListItemPriceText}>${item.price}</Text>
            {item.quantity > 0 ? (
              <Text style={styles.productListItemInStockText}>In stock</Text>
            ) : (
              <Text style={styles.productListItemOutOfStockText}>
                Out of stock
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <SafeAreaView style={styles.productListContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ flex: 1, flexDirection: "column" }}
      />
      <Pagination />
    </SafeAreaView>
  );
}

export default ProductList;

const data = [
  {
    id: "1",
    category: "Yellow 4 Wheel Drive Car Turbo VX6 Engine",
    name: "Yellow 4 Wheel Drive Car Turbo VX6 Engine Automatic",
    details: [
      "Yellow colored",
      "Turbo VX6 Engine",
      "4 Seater",
      "Front rear disc brakes",
      "3000HP",
    ],
    price: 460000.0,
    quantity: 1,
    expiryDate: null,
    addedOn: new Date(),
    image:
      "https://i.picsum.photos/id/1072/700/700.jpg?hmac=Qp-DYXzj964AcsVsxuHvMjFW8mzlPazL8R9_KS37-eE",
  },
  {
    id: "2",
    category: "Shampoo Clinic plus",
    name: "Shampoo Clinic plus",
    details: [
      "Makes your hair silky smooth.",
      "Shiny hairs",
      "Single use",
      "Cheapest rate",
      "Too much of keratine",
    ],
    price: 0.4,
    quantity: 15,
    expiryDate: new Date("20-12-2022"),
    addedOn: new Date(),
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: "3",
    category: "Hair Conditioner",
    name: "Hair Conditioner",
    details: [
      "Makes your hair silky smooth.",
      "Shiny hairs",
      "Single use",
      "Cheapest rate",
      "Too much of keratine",
    ],
    price: 0.4,
    quantity: 0,
    expiryDate: new Date("20-12-2022"),
    addedOn: new Date(),
    image:
      "data:image/jpeg;base64,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",
  },
];
