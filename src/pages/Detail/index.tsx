import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";

import Dot from "../../components/Dot";
import SizeButton from "../../components/SizeButton";

import detail from "../../assets/detail.png";

import styles from "./styles";

const Detail: React.FC = () => {
  const navigate = useNavigation();

  navigate.setOptions({
    headerTitle: "Nike Downshifter 10",
  });

  return (
    <ScrollView style={styles.container}>
      <Image source={detail} style={styles.image} resizeMode="cover"></Image>

      <View>
        <View>
          <Text style={[(styles.title, { fontSize: 24 })]}>R$ 298,98</Text>
        </View>
        <View>
          <Text style={[(styles.title, { fontSize: 30, opacity: 0.4 })]}>
            Nike Downshifter 10
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView>
            <SizeButton bgColor="#17181a" color="fff">
              40
            </SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>38</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
