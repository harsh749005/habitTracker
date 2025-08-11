import { useAuth } from "@/lib/authAppWrite";
import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { Colors } from "@/utils/Colors";
import { MainHabitsData } from "@/utils/MainHabitsData";
const Home = () => {
  const { signOut } = useAuth();
  const { width } = Dimensions.get("screen");
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 14,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "black", fontWeight: "700", fontSize: 20 }}>
          {`Today's Habits`}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            icon="logout"
            iconColor={"black"}
            size={24}
            onPress={signOut}
          />
          <Text onPress={signOut} style={{fontWeight:700}}>Sign out</Text>
        </View>
      </View>
      <FlatList
        data={MainHabitsData}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              width: width * 0.9,
              backgroundColor: Colors.cardBg, // Card background
              borderRadius: 8,
              marginTop: 10,
              padding: 10,
              gap: 10,

              // Shadow for iOS
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,

              // Shadow for Android
              elevation: 1,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color: Colors.textPrimary,

              }}
            >
              {item.title}
            </Text>
            <Text style={{ fontSize: 12, color: "#727272" }}>
              {item.description}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#ffe2a75b", // Streak container background
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  gap: 5,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignSelf: "flex-start",
                }}
              >
                <Text>{item.icon}</Text>
                <Text style={{ fontWeight: 700, color: "#ffaa00ff" }}>
                  {item.streak} day streak
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#d8d6ff50",
                  alignSelf: "flex-start",
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 50,
                }}
              >
                <Text style={{ fontWeight: 700, color: "#716affff" }}>
                  {item.frequency}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
