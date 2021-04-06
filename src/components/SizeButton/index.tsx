import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

interface SizeButtonProps {
  bgColor?: string;
  color?: string;
}

const SizeButton: React.FC<SizeButtonProps> = ({
  bgColor,
  color,
  children,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor || "#fff" }]}>
      <Text style={[styles.text, { color: color || "#ddd" }]}>{children}</Text>
    </View>
  );
};

export default SizeButton;
