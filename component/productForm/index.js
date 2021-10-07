import React, { useState } from "react";
import { View, FlatList, TextInput as NativeTextInput } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import styles from "../../styles";
import ProductDetailItem from "./productDetailItem";
import { Picker } from "@react-native-picker/picker";
import { BarcodeScanner, Products } from "../utils/constants";
import { getJSONItem, setJSONItem } from "../utils/service";

function ProductForm(props) {
  const { route, navigation } = props;
  const detailsLimit = 1000;
  const defaultSelectedLanguage = "units";

  const productId = "#" + (route?.params?.productId || "000000000");
  const [quantity, setQuantity] = useState(1);
  const [heading, setHeading] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState([""]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    defaultSelectedLanguage
  );
  const [quantityErr, setQuantityErr] = useState("");
  const [headingErr, setHeadingErr] = useState("");
  const [priceErr, setPriceErr] = useState("");

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addProductDetailItem = () => {
    if (details.length < detailsLimit) {
      setDetails([...details, ""]);
    }
  };

  const removeProductDetailItem = (index) => {
    if (index === details.length - 1) {
      return;
    }
    const tempDetails = details.filter((item, i) => index !== i);
    setDetails(tempDetails);
  };

  const handleSubmitProductForm = async () => {
    if (isValidated()) {
      const products = await getJSONItem(Products);
      products.push({
        heading,
        quantity,
        price,
        details,
      });

      await setJSONItem(Products, products);

      alert("item added");

      navigation.navigate(BarcodeScanner.route);
    }
  };

  const isValidated = () => {
    let validated = true;

    if (heading.trim().length === 0) {
      validated = false;
      setHeadingErr("Field is required");
    }

    validated = isValidatedQuantity(quantity);
    validated = isValidatedPrice(price);

    return validated;
  };

  const isValidatedPrice = (priceText) => {
    let validated = true;
    if (priceText.trim().length === 0) {
      validated = false;
      setPriceErr("Required");
    } else if (isNaN(priceText)) {
      validated = false;
      setPriceErr("Invalid price.");
    } else if (Number.parseFloat(priceText) < 0) {
      validated = false;
      setPriceErr("Invalid price.");
    }
    return validated;
  };

  const isValidatedQuantity = (quantityText) => {
    let validated = true;
    if (quantityText.length === 0) {
      validated = false;
      setQuantityErr("Required");
    } else if (isNaN(quantityText)) {
      validated = false;
      setQuantityErr("Invalid quantity.");
    } else if (Number.parseFloat(quantityText) <= 0) {
      validated = false;
      setQuantityErr("Invalid quantity.");
    }
    return validated;
  };

  const handleSetPrice = (priceText) => {
    if (isValidatedPrice(priceText)) {
      setPrice(priceText);
    } else {
      setPrice("");
    }
  };

  const handleSetQuantity = ({ nativeEvent }) => {
    const quantityText = nativeEvent.text;
    console.log(quantityText);
    if (isValidatedQuantity(quantityText)) {
      setQuantity(Number.parseInt(quantityText));
    } else {
      setQuantity(1);
    }
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
            onChangeText={setHeading}
            placeholder="Heading"
            label="Heading *"
            mode="flat"
            style={styles.productFormTextInput}
            error={headingErr.length !== 0}
          />
          <TextInput
            value={price}
            onChangeText={handleSetPrice}
            placeholder="0.00$"
            label="Price *"
            mode="flat"
            style={styles.productFormTextInput}
            keyboardType="number-pad"
            error={priceErr.length !== 0}
          />
          <View style={styles.productCartQuantityBox}>
            <Text style={styles.productFormQuantityHeadingText}>
              Quantity:{" "}
            </Text>
            <Text
              style={[styles.productCartQuantityControlBtn, { fontSize: 20 }]}
              onPress={decrementQuantity}
            >
              -
            </Text>
            <NativeTextInput
              style={styles.productCartQauntityTextInput}
              value={quantity.toString()}
              keyboardType="number-pad"
              onChangeText={setQuantity}
              onEndEditing={handleSetQuantity}
            />
            <Text
              style={[styles.productCartQuantityControlBtn, { fontSize: 18 }]}
              onPress={() => setQuantity(quantity + 1)}
            >
              +
            </Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={styles.productFormUnitPicker}
            >
              <Picker.Item label="Units" value="units" />
              <Picker.Item label="Gram" value="gram" />
              <Picker.Item label="Kilogram" value="kilogram" />
              <Picker.Item label="Pound" value="pound" />
              <Picker.Item label="Ounce" value="ounce" />
              <Picker.Item label="Litre" value="litre" />
            </Picker>
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={details}
            style={styles.productFormDetailsFlatList}
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
          <Button
            mode="contained"
            onPress={handleSubmitProductForm}
            style={{ margin: 10 }}
          >
            Add Item
          </Button>
        </View>
      </View>
    </View>
  );
}

export default ProductForm;
