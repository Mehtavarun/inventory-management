import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import styles from "../../styles";
import { getItemByProductId, getJSONItem } from "../utils/service";
import { BarcodeScanner, CartItems } from "../utils/constants";

const { height } = Dimensions.get("window");

function ProductDetails(props) {
  const [screenHeight, setScreenHeight] = useState(0);
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState([]);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [addedDate, setAddedDate] = useState(new Date().toLocaleDateString());

  const { route, navigation } = props;
  const productId = "#" + (route?.params?.productId || "000000000");

  const invalidProductId = "#000000000";

  useEffect(() => {
    (async () => {
      const product = await getItemByProductId(productId);
      if (product !== null) {
        console.log(product);
        setHeading(product.heading);
        setDetails(product.details);
        setPrice("$" + product.price);
        setQuantity(product.quantity);
        setAddedDate(product.addedDate);
      }
    })();
  });

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight);
  };

  const handleAddItem = async () => {
    const cartItems = (await getJSONItem(CartItems)) || [];
    if (invalidProductId !== productId) {
      if (!cartItems.includes(productId)) {
        cartItems.push(productId);
        alert("Item added to cart");
      } else {
        alert("item is already present in cart");
      }
    }
    navigation.navigate(BarcodeScanner.route);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.productDetailsContainer}
      scrollEnabled={screenHeight > height}
      onContentSizeChange={onContentSizeChange}
    >
      <View style={styles.productDetailsHeading}>
        <Text style={styles.productDetailsHeadingBarcodeId}>{productId}</Text>
        <Text style={styles.productDetailsHeadingText}>{heading}</Text>
      </View>
      {/* <View style={styles.productDetailImageContainer}>
        <Image
          source={{
            uri: "https://i.picsum.photos/id/1072/700/700.jpg?hmac=Qp-DYXzj964AcsVsxuHvMjFW8mzlPazL8R9_KS37-eE",
          }}
          style={styles.productDetailImg}
        />
      </View> */}
      <View style={styles.lineSeparator} />
      <View style={styles.productDetails}>
        <Text style={styles.productDetailsPrice}>{price}</Text>
        <View style={styles.productDetailsQuantity}>
          <Text style={styles.productDetailsQuantityHeading}>
            In Stock:{" "}
            <Text style={styles.productDetailsQuantityText}>{quantity}</Text>
          </Text>
        </View>
        <View style={styles.productDetailsDateBox}>
          <View>
            <Text style={styles.productDetailsDateHeading}>Added on</Text>
            <Text style={styles.productDetailsDateText}>{addedDate}</Text>
          </View>
          {/* <View>
            <Text style={styles.productDetailsDateHeading}>Expiry Date</Text>
            <Text style={styles.productDetailsDateText}>{"29-08-2021"}</Text>
          </View> */}
        </View>
        <View style={styles.productDetailedInformation}>
          <Text style={styles.productInformationHeading}>Details</Text>
          <View style={styles.productSpecList}>
            {details.map((item, index) => (
              <Text key={index} style={styles.productSpec}>
                {index + 1 + ". "}
                {item.key}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View>
        <Button mode="contained" onPress={handleAddItem}>
          Add Item
        </Button>
      </View>
    </ScrollView>
  );
}

export default ProductDetails;
