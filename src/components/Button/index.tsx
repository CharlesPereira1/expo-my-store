import React from "react";
import {
  Text,
  TouchableOpacityProps,
  View,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} {...rest}>
        <Text style={styles.title}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
