import React from "react";
import { View, ViewStyle } from "react-native";

type SpacerProps = {
  horizontal?: boolean;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const Spacer = ({
  horizontal = false,
  size,
  color = "transparent",
  style,
}: SpacerProps) => {
  const defaultValue = 0;

  return (
    <View
      style={[
        {
          width: horizontal ? size : color ? "100%" : defaultValue,
          height: !horizontal ? size : defaultValue,
          backgroundColor: color,
        },
        style && { ...style },
      ]}
    />
  );
};

export default Spacer;
