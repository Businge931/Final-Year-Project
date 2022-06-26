import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Welcome from "./screens/Welcome";
import Main from "./screens/Main";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              title: "SIGN IN",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: "Scan",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
