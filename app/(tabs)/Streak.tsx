import { View, Text, FlatList, Dimensions, Image, StatusBar } from "react-native";
import React from "react";
import { HabitsData } from "@/utils/HabitsData";
import { Colors } from "@/utils/Colors";
import LeaderBoard from "@/component/LeaderBoard";
const Login = () => {
  const { width } = Dimensions.get("screen");
  return (
    <>
    <View
      style={{
        // paddingTop:40,
        flex: 1,
        backgroundColor: Colors.mainBg, // Screen background
        // backgroundColor:"#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
      >
{/* 
        <View style={{justifyContent:"flex-start",paddingLeft:10,alignSelf:"flex-start"}}>
        <Text style={{fontSize:20,fontWeight:700}}>Habit Streaks</Text>
        </View> */}
      <LeaderBoard/>

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
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#ffe2a75b", // Streak container background
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  gap: 2,
                  borderRadius: 6,
                  justifyContent: "center",
                  alignSelf: "flex-start",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Text>{item.icon}</Text>
                  <Text style={{ fontWeight: 600, color: "#000000ff" }}>
                    {item.streak}
                  </Text>
                </View>
                <Text style={{fontSize:12, fontWeight: 600, color: "#25252594" }}>
                  Current
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#ffe2a75b", // Streak container background
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  gap: 2,
                  borderRadius: 6,
                  justifyContent: "center",
                  alignSelf: "flex-start",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Image
                    source={require("../../assets/images/winner.png")}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text style={{ fontWeight: 600, color: "#00000094" }}>0</Text>
                </View>
                <Text style={{ fontSize:12,fontWeight: 600, color: "#25252594" }}>
                  Best
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#ffe2a75b", // Streak container background
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  gap: 2,
                  borderRadius: 6,
                  justifyContent: "center",
                  alignSelf: "flex-start",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Text>✅</Text>
                  <Text style={{ fontWeight: 600, color: "#000000ff" }}>0</Text>
                </View>
                
                <Text style={{fontSize:12, fontWeight: 600, color: "#25252594" }}>
                  Total
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
     </>
  );
};

export default Login;
