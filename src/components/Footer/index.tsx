import React from "react";
import { ScrollView, Text, View } from "react-native";

import Shoes from "../Shoes";

import image1 from "../../assets/1.png";
import image3 from "../../assets/3.png";
import image5 from "../../assets/5.png";

import styles from "./styles";

const Footer: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={image1} cost="R$ 110,90">
              Nike Air Max Dia
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={image3} cost="R$ 110,90">
              Nike Air Max Dia
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={image5} cost="R$ 110,90">
              Nike Air Max Dia
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Footer;
