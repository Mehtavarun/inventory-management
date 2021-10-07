import AsyncStorage from "@react-native-async-storage/async-storage";
import { Products } from "./constants";

export async function existsByIdInProducts(id) {
  const products = await getItemByProductId(id);
  return products !== null;
}

export async function getItemByProductId(id) {
  const products = await getJSONItem(Products);
  if (products === null) {
    return null;
  }
  for (let i = 0; i < products.length; i++) {
    if (products.id === id) {
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
