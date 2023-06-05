import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../theme/color";
import PlanetHeader from "../components/common/planet_header";
import Text from "../components/text/text";

const Details = ({ planet }) => {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn />
      <View>
        <Text>{planet?.name}</Text>
      </View>
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
