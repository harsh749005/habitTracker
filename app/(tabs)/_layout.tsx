import { useAuth } from "@/lib/authAppWrite";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const ProtectedLayout = () => {
  const { session, user } = useAuth();

  return !session ? (
    <Redirect href="/auth" />
  ) : (
    <>
      <StatusBar
        backgroundColor="white" // Android background color
        barStyle="dark-content" // iOS/Android text color
      />
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0, // Android
            shadowOpacity: 0, // iOS
            borderBottomWidth: 0, // iOS/Android fallback
          },
          headerTintColor: "#000",
          tabBarActiveTintColor: "#000000ff",
          tabBarInactiveTintColor: "#8e8e93",
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: user?.name ? `${user.name} 👋` : "Today's Habits", // Header title
            tabBarLabel: "Today's Habit", // Tab bar name
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Streak"
          options={{
            title: "Your Streaks", // Header title
            tabBarLabel: "Streak", // Tab bar name
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flame-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="NewHabit"
          options={{
            title: "New Habit", // Header title
            tabBarLabel: "Add", // Tab bar label
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            )
          }}
        />
      </Tabs>
    </>
  );
};

export default ProtectedLayout;
