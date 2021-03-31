import React from "react";
import { Text, View, TouchableOpacity, Image, ImageProps } from "react-native";

import styles from "./styles";

interface ShoesProps {
  children: string;
  img: ImageProps;
  cost: string;
  onClick?: () => void;
}

const Shoes: React.FC<ShoesProps> = ({ children, img, cost, onClick }) => {
  const filterDesc = (desc: string) => {
    if (desc.length < 27) {
      return desc;
    }
    return `${desc.substring(0, 23)}...`;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image source={img} style={styles.shoesImage} />

      <View style={styles.content}>
        <Text style={styles.shoesText}>{filterDesc(children)}</Text>
        <Text style={styles.shoesText}>{cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Shoes;
