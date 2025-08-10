import { AuthProvider } from "@/lib/authAppWrite";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";


export default function RootLayout() {
  return (
    <AuthProvider>
                <StatusBar
              backgroundColor="white" // Android background color
              barStyle="dark-content" // iOS/Android text color
            />
      <Stack screenOptions={{headerShown:false}}/>
    </AuthProvider>
  );
}
