import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import Quotes from "../../utils/Quotes";
import { HabitsData } from "@/utils/HabitsData";
import { Colors } from "@/utils/Colors";
const Login = () => {
  const { width } = Dimensions.get("screen");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.mainBg, // Screen background
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <FlatList
        data={HabitsData}
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
                fontWeight: "600",
                color: Colors.textPrimary,
              }}
            >
              {item.title}
            </Text>
            <Text style={{ fontSize: 12, color: "#727272" }}>
              {item.description}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#ffd58096", // Streak container background
                paddingVertical: 5,
                paddingHorizontal: 15,
                gap: 10,
                borderRadius: 6,
                justifyContent: "center",
                alignSelf:"flex-start"
              }}
            >
              <Text>{item.icon}</Text>
              <Text style={{ fontWeight: 600 }}>{item.streak}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Login;
