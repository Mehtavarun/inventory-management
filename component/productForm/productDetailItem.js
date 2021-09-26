import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import styles from "../../styles";

export default function ProductDetailItem(props) {
  const {
    item,
    index,
    totalItems,
    addProductDetailItem,
    removeProductDetailItem,
  } = props;
  const [detail, setDetails] = useState(item);

  const handleBlurEvent = () => {
    if (totalItems > 1 && detail.trim().length === 0) {
      removeProductDetailItem(index);
    }
  };

  const handleSetDetails = (text) => {
    if (index === totalItems - 1 && text.trim().length > 0) {
      addProductDetailItem();
    }
    setDetails(text);
  };

  return (
    <TextInput
      value={detail}
      placeholder="detail"
      label="Detail"
      mode="compact"
      onChangeText={(text) => handleSetDetails(text)}
      style={styles.productFormTextInput}
      onBlur={handleBlurEvent}
    />
  );
}