import React from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Shoes from "../../components/Shoes";

import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";

import styles from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <View style={styles.textContent}>
            <Text style={styles.text}>TÊNIS</Text>
            <Text style={[styles.text, { color: "#CECECF" }]}>*</Text>
            <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>
          </View>
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
          <Shoes
            img={image1}
            cost="R$ 189,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Tênis Nike Super Max
          </Shoes>
          <Shoes
            img={image2}
            cost="R$ 349,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Tênis Nike Revolution
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={image4}
            cost="R$ 349,90"
            onClick={() => Alert.alert("Clicou")}
          >
            Tênis Nike Revolution
          </Shoes>
          <Shoes
            img={image5}
            cost="R$ 599,90"
            onClick={() => Alert.alert("Clicou")}
          >
            Tênis Nike Epic Carbon
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={image5}
            cost="R$ 349,90"
            onClick={() => Alert.alert("Clicou")}
          >
            Tênis Nike Revolution
          </Shoes>
          <Shoes
            img={image6}
            cost="R$ 599,90"
            onClick={() => Alert.alert("Clicou")}
          >
            Tênis Nike Epic Carbon
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
