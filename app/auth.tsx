import { 
  KeyboardAvoidingView, 
  Platform, 
  StyleSheet, 
  View, 
  TextInput, 
  Text, 
  TouchableOpacity, 
  StatusBar
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "@/lib/authAppWrite";
import { Redirect } from "expo-router";

const Authcreeen = () => {
  const { session, signIn, signUp, error } = useAuth();
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [localerror, setLocalError] = useState<string | null>("");

  const handleAuth = () => {
    if (!email || !password) {
      setLocalError("Please fill in all fields");
      return;
    }
    if (password.length < 8) {
      setLocalError("Passwords must be at least 6 characters long.");
      return;
    }
    setLocalError(null);
    if (isSignUp) {
      signUp({ email, password, name });
    } else {
      signIn({ email, password });
    }
  };

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };

  if (session) return <Redirect href="/(tabs)/Home" />;

  return (
    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      
      <View style={styles.content}>
        <Text style={styles.title}>
          {isSignUp ? "Create Account" : "Welcome Back"}
        </Text>

        {isSignUp && (
          <TextInput
            style={styles.input}
            placeholder="Name"
            autoCapitalize="none"
            value={name}
            onChangeText={setName}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {localerror && <Text style={styles.error}>{localerror}</Text>}
        {error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleAuth}>
          <Text style={styles.buttonText}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSwitchMode}>
          <Text style={styles.switchText}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Authcreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#000000ff",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  // 007BFF
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  switchText: {
    textAlign: "center",
    color: "#007BFF",
    marginTop: 10,
  },
  error: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
  },
});
