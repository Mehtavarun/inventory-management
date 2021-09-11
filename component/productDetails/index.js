import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "../../styles";

const { height } = Dimensions.get("window");
const data = [
  { key: "Devin" },
  { key: "Dan" },
  { key: "Dominic" },
  { key: "Jackson" },
  { key: "James" },
  { key: "Joel" },
  { key: "John" },
  { key: "Jillian" },
  { key: "Jimmy" },
  { key: "Julie" },
];

function ProductDetails() {
  const [screenHeight, setScreenHeight] = React.useState(0);

  onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight);
  };
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.productDetailsContainer}
      scrollEnabled={screenHeight > height}
      onContentSizeChange={onContentSizeChange}
    >
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
        <View style={styles.productDetailedInformation}>
          {data.map((item, index) => (
            <Text key={index} style={styles.item}>
              {item.key}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default ProductDetails;
