import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ type, onPress, text }) => {
  return (
    <Pressable
      style={[styles.container, styles[`container_${type}`], styles.goldTheme]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`text_${type}`], styles.goldText]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },

  container_PRIMARY: {
    backgroundColor: "#FFD700", // Gold color
    borderRadius: 15, // Adjust the border radius to make edges softer
    marginVertical: 10,
    paddingVertical: 12, // Adjust padding for a more comfortable touch
    paddingHorizontal: 20, // Adjust padding for a more comfortable touch
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  container_TERTIARY: {
    marginVertical: 5,
  },

  text_PRIMARY: {
    fontWeight: "bold",
    color: "#2D2727", 
  },

  text_TERTIARY: {
    color: "#FFD700", 
  },

  goldTheme: {
    backgroundColor: "#FFD700", 
  },

  goldText: {
    color: "#2D2727", 
  },
});

export default Button;
