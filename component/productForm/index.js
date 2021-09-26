import React, { useState } from "react";
import { View, FlatList, TextInput as NativeTextInput } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import styles from "../../styles";
import ProductDetailItem from "./productDetailItem";
import { Picker } from "@react-native-picker/picker";

function ProductForm(props) {
  const { route } = props;
  const detailsLimit = 10;
  const defaultSelectedLanguage = "units";

  const productId = "#" + (route?.params?.productId || "000000000");
  const [quantity, setQuantity] = useState(1);
  const [heading, setHeading] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState([""]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    defaultSelectedLanguage
  );

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

  const handleSubmitProductForm = () => {
    console.log("submitted");
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
            mode="flat"
            style={styles.productFormTextInput}
          />
          <TextInput
            value={price}
            onChange={setPrice}
            placeholder="0.00$"
            label="Price"
            mode="flat"
            style={styles.productFormTextInput}
            keyboardType="number-pad"
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
