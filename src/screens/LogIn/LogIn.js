import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Logo from "../../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onLoginPress = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };

  const onDontHaveAccountPressed = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground
      source={Logo}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome Back!
        </Text>

        <Input
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <Input
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />

        <Button
          text="Log In"
          type="PRIMARY"
          onPress={handleSubmit(onLoginPress)}
        />
        <Button
          text="Forgot Password?"
          type="TERTIARY"
          onPress={onForgotPasswordPressed}
        />
        <Button
          text="Don't have an account? Register here."
          onPress={onDontHaveAccountPressed}
          type="TERTIARY"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 60,
    fontWeight: "400",
    color: "limegreen",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LogIn;
