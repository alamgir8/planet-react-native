import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
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
  const { name, description } = planet;
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
        <View style={styles.imageView}>{renderImage(name)}</View>
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {name}{" "}
          </Text>
          <Text style={styles.description}>{description} </Text>
          <Pressable style={styles.source}>
            <Text>Source :</Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>
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
  imageView: {
    marginTop: spacing[4],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center",
  },
  name: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginTop: spacing[4],
    lineHeight: 21,
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[4],
  },
  wikipedia: {
    textDecorationLine: "underline",
    marginLeft: spacing[2],
  },
});
