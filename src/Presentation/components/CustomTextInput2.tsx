import { View, Text, KeyboardType, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { MyColors } from "../theme/appTheme";

interface Props {
  placeholder: string;
  value: string;
  keyboardtype: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}

export default function CustomTextInput2({
  placeholder,
  value,
  keyboardtype,
  secureTextEntry,
  property,
  onChangeText,
}: Props) {
 
  return (
    <View style={styles.formInput}>
      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardtype}
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => onChangeText(property, text)}
      />
    </View>
  );
 
}

const styles = StyleSheet.create({

  formInput: {
    marginTop: 25,
    height: 60,
    margin: 16,
    
  },

  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.orange,
    fontSize: 24
  },
});
