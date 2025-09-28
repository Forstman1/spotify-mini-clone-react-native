import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

export default function AnimatedIcon({
  name,
  color,
  size = 24,
  focused,
}: {
  name: string;
  color: string;
  size?: number;
  focused: boolean;
}) {
  const scale = useRef(new Animated.Value(focused ? 1.2 : 1)).current;
  const opacity = useRef(new Animated.Value(focused ? 1 : 0.6)).current;

  useEffect(() => {
    // Stop any existing animations
    scale.stopAnimation();
    opacity.stopAnimation();

    // Run animations in parallel
    Animated.parallel([
      Animated.spring(scale, {
        toValue: focused ? 1.2 : 1,
        tension: 200,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: focused ? 1 : 0.6,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [focused, scale, opacity]);

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
        opacity,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon name={name} size={size} color={color} />
    </Animated.View>
  );
}
