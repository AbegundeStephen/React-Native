import React, { useState } from "react";
import { StyleSheet,TextInput,View } from "react-native";

export default function SearchInput(props) {
    const [text, setText] = useState("")
   const handleChangeText = (newText) => {
        setText(newText)
    }
  const handleSubmitEditing = () => {
    const onSubmit = props.onSubmit
  if (!text) return;

    onSubmit(text);
    setText("")
   }
    return (
        <View style={styles.container}>
      <TextInput
      autoCorrect={false}
      value={text}
      placeholder={props.placeholder}
      placeholderTextColor='white'
      style={styles.textInput}
      underlineColorAndroid='transparent'
      clearButtonMode='always'
      onChangeText={handleChangeText}
       onSubmitEditing={handleSubmitEditing}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 0,
        borderRadius: 5,
    },

    textInput: {
        flex: 1,
        color: 'white'
    }
})