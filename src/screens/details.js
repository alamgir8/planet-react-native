import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/color";
import PlanetHeader from "../components/common/planet_header";

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
