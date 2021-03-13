import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>*</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
