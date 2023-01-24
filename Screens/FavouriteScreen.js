/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  LogBox,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavouriteScreen({navigation, route}) {
  const [img, setImg] = useState('');
  let STORAGE_KEY = '@user_input';
  LogBox.ignoreAllLogs();

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);

      if (value !== null) {
        setImg(value);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  useEffect(() => {
    readData();
  });

  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: '50%'}}
        source={{
          uri: img,
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.inputText}>Go home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  header: {
    fontSize: 30,
    color: 'yellow',
  },
  button: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    marginTop: 50,
    borderRadius: 10,
  },
  inputText: {
    color: 'black',
  },
});
