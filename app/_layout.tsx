import { AuthProvider } from "@/lib/authAppWrite";
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{headerShown:false}}/>
    </AuthProvider>
  );
}
