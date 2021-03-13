import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

// import { Container } from './styles';

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
          <Text style={styles.text}>*</Text>
          <Text style={styles.text}>MASCULINO</Text>
          <TouchableOpacity>
            <MaterialIcons />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 8,
  },
  image: {},
  textContainer: {},
  text: {},
});

export default Home;
