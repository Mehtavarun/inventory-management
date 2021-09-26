import { Dimensions, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  font: {
    fontFamily: "sans-serif",
    fontSize: 54,
    fontWeight: "300",
    lineHeight: 58,
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
    backgroundColor: "#fff",
  },
  productCart: {
    marginVertical: 4,
    marginHorizontal: 6,
    fontSize: 10,
  },
  cartBox: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 3,
    elevation: 2,
  },
  productCartBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  productCartImageBox: {
    margin: 7,
    marginRight: 10,
  },
  productCartImage: {
    height: 90,
    width: 90,
  },
  productCartDetailsBox: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 3,
  },
  productCartDetailsRow2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginRight: 30,
  },
  productCartNameBox: {
    flex: 1,
  },
  productCartNameText: {
    fontSize: 16,
    color: "#263238",
    fontFamily: "sans-serif-medium",
  },
  productCartPriceText: {
    fontSize: 18,
    color: "#B71C1C",
  },
  productCartQuantityBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 30,
    marginBottom: 50,
  },
  productCartQuantityControlBtn: {
    backgroundColor: "#ECEFF1",
    textAlign: "center",
    textAlignVertical: "center",
    color: "black",
    minWidth: 30,
    maxWidth: 30,
    minHeight: 30,
    maxHeight: 30,
  },
  productCartQauntityTextInput: {
    backgroundColor: "#CFD8DC",
    textAlign: "center",
    textAlignVertical: "center",
    minWidth: 40,
    maxWidth: 40,
    minHeight: 30,
    maxHeight: 30,
  },
  productCartItemRemoveBtn: {
    elevation: 0,
    margin: 2,
    marginTop: 0,
  },
  productFormContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  productFormBox: {
    margin: 10,
  },
  productForm: {
    borderWidth: 0.7,
    borderColor: "#CFD8DC",
    margin: 10,
    padding: 20,
    marginTop: 0,
  },
  productFormHeadingBox: {
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 0,
  },
  productFormHeadingProductId: {
    color: "#78909C",
  },
  productFormTextInput: {
    backgroundColor: "white",
    height: 58,
    marginBottom: 20,
    elevation: 2,
    margin: 5,
  },
  productFormQuantityHeadingText: {
    fontSize: 17,
    color: "#78909C",
    marginRight: 10,
    marginLeft: 5,
  },
  productFormUnitPicker: {
    minWidth: 110,
    maxWidth: 120,
    marginTop: 3,
    marginLeft: 20,
  },
  productFormDetailsFlatList: {
    padding: 10,
    paddingBottom: 0,
  },
});
