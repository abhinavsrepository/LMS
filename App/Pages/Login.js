import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Login() {
  return (
    <View>
      <Image source={require("./../Assets/Images/loginlogo.png")} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Abhinav's Academy</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderBottomStartRadius: 40,
  },
  welcomeText: { fontSize: 35, textAlign: "center", fontWeight: "bold" },
});
