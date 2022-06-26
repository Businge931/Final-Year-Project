import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";

const Button = ({ children, onPress, style }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    borderRadius: 2,
    backgroundColor: GlobalStyles.colors.gray600,
    width: 130,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  text: {
    color: GlobalStyles.colors.gray400,
    fontSize: 16,
    padding: 4,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.gray100,
  },
});
