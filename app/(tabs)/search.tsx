import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import { Link } from "expo-router";
import Animated from "react-native-reanimated";
import { Colors } from "@/constants/theme";

export default function SearchScreen() {
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: Colors.background,
      }}
    >
      <Animated.Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#1DB954",
        }}
      >
        Search Screen
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
