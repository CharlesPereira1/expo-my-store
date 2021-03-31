import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import detail from "../../assets/detail.png";

import styles from "./styles";

const Detail: React.FC = () => {
  const navigate = useNavigation();

  navigate.setOptions({
    headerTitle: "Nike Downshifter 10",
  });

  return (
    <View>
      <Image source={detail}></Image>
    </View>
  );
};

export default Detail;
