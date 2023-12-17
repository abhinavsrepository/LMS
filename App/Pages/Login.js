import { View, Text, Image, StyleSheet, Colors } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View>
      <Image source={require("./../Assets/Images/loginlogo.png")} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Abhinav's Academy</Text>
        <Text style={{ textAlign: "center", marginTop: 40, fontSize: 20 }}>
          Login/Signin
        </Text>
        <View style={styles.button}>
          <Ionicons name="logo-google" size={24} color="white" />
          <Text>Sign in with Google </Text>
        </View>
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
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
  },
});
