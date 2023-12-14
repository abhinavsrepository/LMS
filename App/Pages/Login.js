import { View, Text, Image } from "react-native";
import React from "react";

export default function Login() {
  return (
    <View>
      <Image source={require("./../Assets/Images/login.jpg")} />
      <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Abhinav's Academy</Text>

      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        paddingTop:40

    },
    welcomeText:{fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    }
    
});
