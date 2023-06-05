import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import Text from "../text/text";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../theme/color";
import { spacing } from "../../theme/spacing";
import { AntDesign } from "@expo/vector-icons";

const PlanetItem = ({ item }) => {
  const navigation = useNavigation();
  const { name, color } = item;
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.circle, { backgroundColor: color }]} />
        <Text preset="h4" style={styles.itemName}>
          {name}
        </Text>
      </View>

      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
};

export default PlanetItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  list: {
    padding: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },
});
