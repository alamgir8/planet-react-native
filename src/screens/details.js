import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../theme/color";
import PlanetHeader from "../components/common/planet_header";
import Text from "../components/text/text";
import { spacing } from "../theme/spacing";
import {
  Earth,
  Jupiter,
  Mars,
  Saturn,
  Uranus,
  Venus,
  Mercury,
  Neptune,
} from "../svg";

const Details = ({ navigation, route }) => {
  const planet = route.params.planet;
  const { name } = planet;
  const renderImage = (name) => {
    switch (name) {
      case "Earth":
        return <Earth />;
      case "Mercury":
        return <Mercury />;
      case "Neptune":
        return <Neptune />;
      case "Mars":
        return <Mars />;
      case "Jupiter":
        return <Jupiter />;
      case "Saturn":
        return <Saturn />;
      case "Uranus":
        return <Uranus />;
      case "Venus":
        return <Venus />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn />
      <ScrollView>
        <View style={styles.planetImageView}>{renderImage(name)}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  planetImageView: {
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
});
