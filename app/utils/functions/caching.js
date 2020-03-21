/* eslint-disable no-alert */
// this file used to cache and retrieve objects based on key and value

import AsyncStorage from '@react-native-community/async-storage';

// cache object
export const cacheObj = async (value, key) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value)); //using json.stringify here in case of non-primitive types (objects and arrays)
  } catch (error) {
    alert('error while caching' + error);
  }
};

// get object
export const getObj = async key => {
  try {
    const cachedValue = await AsyncStorage.getItem(key);
    if (cachedValue) {
      return JSON.parse(cachedValue);
    }
  } catch (error) {
    alert('error while caching' + error);
  }
};
