import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Colors } from "@/utils/Colors";

const LeaderBoard = () => {
  const { width } = Dimensions.get("screen");
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", margin: 10 }}
    >
      <View
        style={{
          width: width * 0.9,
          backgroundColor: Colors.cardBg, // Card background
          borderRadius: 8,
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
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image
            source={require("@/assets/images/star-medal.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: 700,color:"#716affff" }}>Top Streaks</Text>
        </View>
        
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            alignItems:"center",
            paddingVertical:10
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image
              source={require("@/assets/images/gold-medal.png")}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <Text>Call an old friend</Text>
          </View>
          <Text style={{fontWeight:700}}>6</Text>
        </View>
         <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            alignItems:"center",
            borderWidth:2,
            borderLeftWidth:0,
            borderRightWidth:0,
            borderColor:"#dcdcdc4b",
            paddingVertical:15
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image
              source={require("@/assets/images/silver-medal.png")}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <Text>Meditate</Text>
          </View>
          <Text>0</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            alignItems:"center",
            paddingVertical:10
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image
              source={require("@/assets/images/bronze-medal.png")}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <Text>Drink 1 gallon of water</Text>
          </View>
          <Text>0</Text>
        </View>
      </View>
    </View>
  );
};

export default LeaderBoard;
