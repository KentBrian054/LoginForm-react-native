import React from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login"); // Replace "Login" with the actual name of your login screen
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/background.jpg")} // Add your background image
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Chess.com</Text>
        <Pressable style={styles.button} onPress={navigateToLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable> 
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00FFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LandingPage;
