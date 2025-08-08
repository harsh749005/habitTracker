import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { useAuth } from "@/lib/authAppWrite";
import { Redirect } from "expo-router";

const Authcreeen = () => {
  const {session,signIn,signUp}  = useAuth();
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("");
  const theme = useTheme();
  const handleAuth = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if(password.length < 8){
        setError("Passwords must be at least 6 characters long.")
        return;
    }
    setError(null);
    if(isSignUp){signUp({email,password,name})}
    signIn({email,password});
  };
  const handleSwitchMode = () => {
      setIsSignUp((prev) => !prev);
    };
      if(session) return <Redirect href="/(tabs)/Home" />
  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text>{isSignUp ? "Create Account" : "Welcome Back"}</Text>
        {
          isSignUp && (
                    <TextInput
          label="Name"
          autoCapitalize="none"
          placeholder="Name"
          mode="outlined"
          onChangeText={setName}
        />
          )
        }
        <TextInput
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
          onChangeText={setEmail}
        />
        <TextInput
          label="Password"
          autoCapitalize="none"
          keyboardType="visible-password"
          placeholder="password"
          mode="outlined"
          onChangeText={setPassword}
        />
        {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
        <Button mode="contained" onPress={handleAuth}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <Button mode="text" onPress={handleSwitchMode}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Authcreeen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    gap: 10,
  },
});
