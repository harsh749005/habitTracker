import { useAuth } from "@/lib/authAppWrite";
import { Redirect, Tabs } from "expo-router";
import React from "react";

const ProtectedLayout = () => {
  const { session } = useAuth();

  return !session ? (
    <Redirect href="/auth" />
  ) : (
    <Tabs>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Login" />
    </Tabs>
  );
};

export default ProtectedLayout;
