import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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
          <Text style={[(styles.title, { fontSize: 30 })]}>
            Nike Downshifter 10
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
