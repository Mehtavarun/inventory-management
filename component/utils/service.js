import AsyncStorage from "@react-native-async-storage/async-storage";
import { Products } from "./constants";

export async function existsByIdInProducts(id) {
  const product = await getItemByProductId(id);
  return product !== null;
}

export async function getProductsByIds(ids) {
  const items = [];
  let product;
  for (let i = 0; i < ids.length; i++) {
    product = await getItemByProductId(ids[i]);
    if (product !== null || product !== undefined) {
      items.push(product);
    }
  }
  return items;
}

export async function getItemByProductId(id) {
  const productsObj = await getJSONItem(Products);
  if (productsObj === null) {
    return null;
  }
  const products = productsObj.value;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return null;
}

export async function getJSONItem(key) {
  const str = await AsyncStorage.getItem(key);
  return JSON.parse(str);
}

export async function setJSONItem(key, value) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}
