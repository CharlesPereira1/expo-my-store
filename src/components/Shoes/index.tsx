import React, { ReactNode } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

interface ShoesProps {
  children: ReactNode;
}

const Shoes: React.FC<ShoesProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text>Shoes</Text>
      {children}
    </View>
  );
};

export default Shoes;
