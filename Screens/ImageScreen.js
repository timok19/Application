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

export default function ImageScreen({navigation, route}) {
  const [img, setImg] = useState();
  let STORAGE_KEY = '@user_input';
  LogBox.ignoreAllLogs();

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, img);
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const imageLoader = async () => {
    console.log(route.params.paramKey.img);
    var response;
    if (route.params.paramKey.img === 0) {
      response = await fetch(
        'https://img.bruzu.com/?backgroundImage=https://source.unsplash.com/U-Kty6HxcQc/500x500&a.text=' +
          route.params.paramKey.text,
      );
    } else if (route.params.paramKey.img === 1) {
      response = await fetch(
        'https://img.bruzu.com/?backgroundImage=https://ucarecdn.com/8df536f9-f4b7-48c8-a482-92cd9f20745c//-/preview/-/quality/smart/&h=500&w=500&a.text=' +
          route.params.paramKey.text +
          '&a.color=white',
      );
    } else {
      response = await fetch(
        'https://img.bruzu.com/?backgroundImage=https://source.unsplash.com/ZAvN2FQIbkQ/500x500&h=500&w=500&a.text=' +
          route.params.paramKey.text,
      );
    }

    console.log(response.url);
    setImg(response.url);
  };

  useEffect(() => {
    imageLoader();
  });

  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: '50%'}}
        source={{
          uri: img,
        }}
      />
      <View style={styles.middleContainer}>
        <TouchableOpacity style={styles.button} onPress={() => saveData()}>
          <Text style={styles.inputText}>Set as favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.inputText}>Try next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Favourite')}>
        <Text style={styles.inputText}>View favourite</Text>
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
    margin: 20,
    borderRadius: 10,
  },
  inputText: {
    color: 'black',
  },
  middleContainer: {
    flexDirection: 'row',
  },
});
