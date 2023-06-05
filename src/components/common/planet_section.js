import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../text/text";
import { spacing } from "../../theme/spacing";
import { colors } from "../../theme/color";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: "uppercase" }}>
        {title}{" "}
      </Text>
      <Text preset="h2">{value} </Text>
    </View>
  );
};

export default PlanetSection;

const styles = StyleSheet.create({
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 0.4,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
