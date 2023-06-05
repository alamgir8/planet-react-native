import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    "Antonio-Medium": require("../../assets/fonts/Antonio-Regular.ttf"),
    "Spartan-Regular": require("../../assets/fonts/LeagueSpartan-Regular.ttf"),
    "Spartan-Bold": require("../../assets/fonts/LeagueSpartan-Bold.ttf"),
  });
};
