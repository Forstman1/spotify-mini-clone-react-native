import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Icon from "@expo/vector-icons/FontAwesome6";
import { Animated, Platform, View } from "react-native";
import AnimatedIcon from "@/components/animatedIcon";
// import Animated from "react-native-reanimated";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.text,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.background,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 5,
          // height: 100,
          paddingTop: 10,
          marginBottom: Platform.OS === "ios" ? 0 : 20,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          paddingTop: 5,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon
              size={28}
              name="house"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon
              size={28}
              name="magnifying-glass"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon
              size={28}
              name="book"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
