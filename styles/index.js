import { Dimensions, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  font: {
    fontFamily: "sans-serif",
    fontSize: 54,
    fontWeight: "300",
    lineHeight: 58,
  },
  loginHeading: {
    marginBottom: 60,
    color: "#546E7A",
  },
  loginInput: {
    marginBottom: 6,
    marginTop: 4,
  },
  loginButton: {
    marginTop: 15,
  },
  backgroundColor: {
    backgroundColor: "#ECEFF1",
  },
  loginContainer: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  loginForm: {
    justifyContent: "center",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  loginSurface: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: "center",
    elevation: 10,
    borderRadius: 7,
  },
  keyboardContainer: {
    flex: 1,
  },
  productDetailsContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#F5FCFF",
  },
  productDetailImageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    minHeight: 400,
    maxHeight: 410,
    paddingLeft: 30,
    paddingRight: 30,
  },
  productDetailImg: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    resizeMode: "contain",
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
  },
  productDetails: {
    margin: 20,
  },
  productDetailsHeading: {
    marginTop: 14,
    marginLeft: 30,
    marginBottom: 0,
  },
  productDetailsHeadingBarcodeId: {
    color: "#78909C",
  },
  productDetailsHeadingText: {
    margin: 5,
    marginTop: 7,
    marginBottom: -5,
    fontFamily: "monospace",
    color: "#546E7A",
    fontSize: 20,
    fontWeight: "bold",
  },
  lineSeparator: {
    borderBottomColor: "#CFD8DC",
    borderBottomWidth: 4,
  },
  productDetailsPrice: {
    color: "#B71C1C",
    fontSize: 20,
  },
  productDetailsQuantity: {
    marginTop: 10,
  },
  productDetailsQuantityHeading: {
    color: "#212121",
    fontSize: 18,
  },
  productDetailsQuantityText: {
    color: "#424242",
    fontSize: 17,
  },
  productDetailsDateBox: {
    width: 300,
    marginLeft: 3,
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productDetailsDateHeading: {
    color: "#212121",
    fontSize: 19,
  },
  productDetailsDateText: {
    fontSize: 16,
    marginTop: 3,
    color: "#424242",
  },
  productDetailedInformation: {
    marginTop: 23,
    marginLeft: 3,
  },
  productSpecList: {
    marginTop: 5,
  },
  productInformationHeading: {
    fontSize: 19,
    color: "#212121",
  },
  productSpec: {
    fontSize: 15,
    color: "#424242",
  },
  productListContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  productListItem: {
    marginVertical: 4,
    marginHorizontal: 6,
    fontSize: 10,
  },
  productListItemBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderColor: "#fff",
    borderWidth: 1.5,
  },
  productListItemImageBox: {
    marginRight: 10,
  },
  productListItemImage: {
    height: 90,
    width: 90,
  },
  productListItemDetailsBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 3,
  },
  productListItemDetailsRow2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 30,
  },
  productListItemNameBox: {
    flex: 1,
  },
  productListItemNameText: {
    fontSize: 16,
    color: "#616161",
    fontFamily: "sans-serif-medium",
  },
  productListItemPriceText: {
    fontSize: 18,
    color: "#B71C1C",
  },
  productListItemInStockText: {
    fontSize: 16,
    color: "#2E7D32",
    fontFamily: "sans-serif-light",
  },
  productListItemOutOfStockText: {
    fontSize: 16,
    color: "#DD2C00",
    fontFamily: "sans-serif-light",
  },
});
