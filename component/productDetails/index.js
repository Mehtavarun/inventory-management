import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../../styles";

function ProductDetails() {
  return (
    <View style={styles.productDetailsContainer}>
      <View style={styles.productDetailsHeading}>
        <Text style={styles.productDetailsHeadingBarcodeId}>
          #{"123456789056"}
        </Text>
        <Text style={styles.productDetailsHeadingText}>
          {"Yellow Turbo VX6 Car with 4 Wheel Drive"}
        </Text>
      </View>
      <View style={styles.productDetailImageContainer}>
        <Image
          source={{
            uri: "https://i.picsum.photos/id/1072/700/700.jpg?hmac=Qp-DYXzj964AcsVsxuHvMjFW8mzlPazL8R9_KS37-eE",
          }}
          style={styles.productDetailImg}
        />
      </View>
      <View style={styles.lineSeparator} />
      <View style={styles.productDetails}>
        <Text style={styles.productDetailsPrice}>${"499,000.00"}</Text>
        <View style={styles.productDetailsQuantity}>
          <Text style={styles.productDetailsQuantityHeading}>
            In Stock:{" "}
            <Text style={styles.productDetailsQuantityText}>{"5"}</Text>
          </Text>
        </View>
        <View style={styles.productDetailsDateBox}>
          <View>
            <Text style={styles.productDetailsDateHeading}>Added on</Text>
            <Text style={styles.productDetailsDateText}>{"29-08-2021"}</Text>
          </View>
          <View>
            <Text style={styles.productDetailsDateHeading}>Expiry Date</Text>
            <Text style={styles.productDetailsDateText}>{"29-08-2021"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProductDetails;
