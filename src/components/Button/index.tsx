import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

interface ButtonProps {}

const Button: React.FC = () => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.title}>Button</Text>
    </View>
  );
};

export default Button;
