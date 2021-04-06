import React from "react";
import { View } from "react-native";

import styles from "./styles";

interface DotProps {
  color: string;
}

const Dot: React.FC<DotProps> = ({ color }) => {
  return <View style={[styles.container, { backgroundColor: color }]}></View>;
};

export default Dot;
