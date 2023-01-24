/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default function HomeScreen({navigation}) {
  const [text, setText] = useState('');
  const [img, setImg] = useState(0);
  const bgImages = ['Mountains', 'Lake', 'Sky'];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter text</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter some text"
      />
      <SelectDropdown
        data={bgImages}
        onSelect={(selectedItem, index) => {
          setImg(index);
        }}
        defaultButtonText={'Mountains'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Image', {paramKey: {text, img}})}>
        <Text style={styles.inputText}>Confirm</Text>
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
  input: {
    height: 50,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    backgroundColor: 'grey',
    textAlign: 'center',
    borderColor: 'yellow',
    borderRadius: 8,
    fontSize: 20,
    textAlignVertical: 'center',
  },
  button: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderRadius: 10,
    marginTop: 30,
  },
  inputText: {
    color: 'black',
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  dropdown1BtnTxtStyle: {color: 'black', textAlign: 'center', fontSize: 20},
  dropdown1DropdownStyle: {backgroundColor: 'black'},
  dropdown1RowStyle: {
    backgroundColor: 'gray',
    borderBottomColor: 'yellow',
    borderRadius: 5,
    borderWidth: 0.5,
  },
  dropdown1RowTxtStyle: {color: 'black', textAlign: 'center', fontSize: 20},
});
