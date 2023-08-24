import { StyleSheet } from "react-native";
import { useCallback } from "react";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useFonts as useFontsGoogle, Inter_900Black } from "@expo-google-fonts/inter";

SplashScreen.preventAutoHideAsync();

function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../../assets/fonts/Inter-Black.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, paddingTop: insets.top, backgroundColor: "white" }}
      onLayout={onLayoutRootView}
    >
      <Text style={{ fontSize: 28 }}>Content is in safe area.</Text>
      <Text style={{ fontFamily: "Inter-Black", fontSize: 30, color: "#000000" }}>Inter Black</Text>
      <Text style={{ fontSize: 30, color: "#000000" }}>Platform Default</Text>
    </View>
  );
}

export default function TabOneScreen() {
  return (
    <SafeAreaProvider>
      {/* <View style={styles.container}>
        <Text style={styles.title}>Hello, world!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </View> */}
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
