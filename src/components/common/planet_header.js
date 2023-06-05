import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../text/text";
import { spacing } from "../../theme/spacing";
import { colors } from "../../theme/color";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlanetHeader = ({ backBtn }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginRight: spacing[4] }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
};

export default PlanetHeader;

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.3,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
});
