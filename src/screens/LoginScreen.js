import React from "react";
import { Text, StyleSheet } from "react-native";

const LoginScreen = () => {
  return <Text style={styles.text}>LoginScreen</Text>;
};

LoginScreen.navigationOptions = () => ({
  headerShown: false,
});

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default LoginScreen;
