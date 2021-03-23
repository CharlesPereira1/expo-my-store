import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

import img from "../../assets/1.png";

const Shoes: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={img} style={styles.shoesImage} />

      <View style={styles.content}>
        <Text style={styles.shoesText}>Nike Shox 10</Text>
        <Text style={styles.shoesText}>R$ 190,99</Text>
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
