import React, { ReactNode } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageProps,
} from "react-native";

import img from "../../assets/1.png";

interface ShoesProps {
  children: string;
  img: ImageProps;
  cost: string;
}

const Shoes: React.FC<ShoesProps> = ({ children, img, cost }) => {
  const filterDesc = (desc: string) => {
    if (desc.length < 27) {
      return desc;
    }
    return `${desc.substring(0, 23)}...`;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={img} style={styles.shoesImage} />

      <View style={styles.content}>
        <Text style={styles.shoesText}>{filterDesc(children)}</Text>
        <Text style={styles.shoesText}>{cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  shoesImage: {
    width: 175,
    height: 175,
  },
  content: {
    opacity: 0.4,
  },
  shoesText: {
    fontSize: 16,
  },
});

export default Shoes;
