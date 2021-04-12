import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

interface ButtonProps {}

const Button: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.title}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
