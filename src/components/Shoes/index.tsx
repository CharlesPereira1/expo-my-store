import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

import img from "../../assets/1.png";

const Shoes: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={img} style={styles.shoesImage} />
      <Text style={styles.shoesText}>Nike Shox 10</Text>
      <Text style={styles.shoesText}>R$ 190,99</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  shoesImage: {},
  shoesText: {},
});

export default Shoes;
