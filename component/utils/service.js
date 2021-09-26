import AsyncStorage from "@react-native-async-storage/async-storage";
import { Products } from "./constants";

export async function existsByIdInProducts(id) {
  const products = await getItem(Products);
  for (let i = 0; i < products.length; i++) {
    if (products.id === id) {
      return true;
    }
  }
  return false;
}

export async function getItem(key) {
  const str = await AsyncStorage.getItem(key);
  return JSON.parse(str);
}
