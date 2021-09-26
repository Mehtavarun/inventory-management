import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../../styles";
import ProductDetailItem from "./productDetailItem";

function ProductForm(props) {
  const { route } = props;

  const productId = "#" + (route?.params?.productId || "000000000");
  const [quantity, setQuantity] = useState(1);
  const [heading, setHeading] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState([""]);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addProductDetailItem = () => {
    setDetails([...details, ""]);
  };

  const removeProductDetailItem = (index) => {
    if (index === details.length - 1) {
      return;
    }
    const tempDetails = details.filter((item, i) => index !== i);
    setDetails(tempDetails);
  };

  return (
    <View style={styles.productFormContainer}>
      <View style={styles.productFormHeadingBox}>
        <Text style={styles.productFormHeadingProductId}>{productId}</Text>
      </View>
      <View style={styles.productFormBox}>
        <View style={styles.productForm}>
          <TextInput
            value={heading}
            onChange={setHeading}
            placeholder="Heading"
            label="Heading"
            mode="compact"
            style={styles.productFormTextInput}
          />
          <TextInput
            value={price}
            onChange={setPrice}
            placeholder="0.00$"
            label="Price"
            mode="compact"
            style={styles.productFormTextInput}
            keyboardType="number-pad"
          />
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={details}
            renderItem={(item) => (
              <ProductDetailItem
                item={item.item}
                index={item.index}
                totalItems={details.length}
                removeProductDetailItem={removeProductDetailItem}
                addProductDetailItem={addProductDetailItem}
              />
            )}
          />
        </View>
      </View>
      {/* <View style={styles.productCartQuantityBox}>
        <Text
          style={[styles.productCartQuantityControlBtn, { fontSize: 20 }]}
          onPress={decrementQuantity}
        >
          -
        </Text>
        <TextInput
          style={styles.productCartQauntityTextInput}
          value={quantity.toString()}
        />
        <Text
          style={[styles.productCartQuantityControlBtn, { fontSize: 18 }]}
          onPress={() => setQuantity(quantity + 1)}
        >
          +
        </Text>
      </View> */}
    </View>
  );
}

export default ProductForm;
