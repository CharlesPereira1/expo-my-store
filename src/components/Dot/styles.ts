import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").height * 0.05,
    borderRadius: (Dimensions.get("window").height * 0.05) / 2,
    backgroundColor: "red",
  },
});

export default styles;
