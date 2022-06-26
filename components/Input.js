import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";

const Input = ({ label, inputTextConfig }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...inputTextConfig} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 8,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: GlobalStyles.colors.gray700,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.gray500,
    color: GlobalStyles.colors.gray700,
    padding: 10,
    borderRadius: 6,
    fontSize: 18,
  },
});
