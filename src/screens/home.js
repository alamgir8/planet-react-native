import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import PlanetHeader from "../components/common/planet_header";
import { colors } from "../theme/color";
import { planet_list } from "../data/planet_list";
import { spacing } from "../theme/spacing";
import PlanetItem from "../components/common/planet_item";

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        style={styles.searchInput}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={planet_list}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Home;

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
  searchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[4],
  },
});
