import { StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { GlobalStyles } from "../constants/styles";

const Welcome = ({ navigation }) => {
  // const [usename, setUsername] = useState("");

  const buttonPressHandler = () => {
    navigation.navigate("Main");
  };

  const nameChangeHandler = () => {};

  const emailChangeHandler = () => {};

  const passwordChangeHandler = () => {};

  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.outerContainer}>
        <Input
          label="Username"
          inputTextConfig={{
            onChangeText: nameChangeHandler,
            autoCorrect: false,
            placeholder: "Your name",
            // value={usename}
          }}
        />
        <Input
          label="Email"
          inputTextConfig={{
            onChangeText: emailChangeHandler,
            autoCorrect: false,
            placeholder: "test@test.com",
          }}
        />
        <Input
          label="Password"
          inputTextConfig={{
            onChangeText: passwordChangeHandler,
            autoCorrect: false,
            placeholder: "***********",
          }}
        />
      </View>
      <Button onPress={buttonPressHandler}>Sign In</Button>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 80,
    backgroundColor: GlobalStyles.colors.gray400,
    marginHorizontal: 10,
    // borderRadius: 6,
    padding: 8,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.gray800,
    // marginVertical: 40,
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
});
