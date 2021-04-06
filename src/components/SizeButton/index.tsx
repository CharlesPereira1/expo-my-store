import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

interface SizeButtonProps {}

const SizeButton: React.FC<SizeButtonProps> = () => {
  return (
    <View style={styles.container}>
      <Text>39</Text>
    </View>
  );
};

export default SizeButton;
