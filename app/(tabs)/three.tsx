import { StyleSheet, useColorScheme } from "react-native";
import { View } from "../../components/Themed";
import { useFonts } from "expo-font";
import { Paragraph, Spacer, Stack, TamaguiProvider, Theme, YStack, Text, styled } from "tamagui";
import { StatusBar } from "expo-status-bar";
import config from "../../tamagui.config";
import { Circle } from "../../components/tamagui-components/Circle";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        {/* <YStack f={1} jc="center" ai="center" backgroundColor={"$backgroundSoft"}>
          <Paragraph color="$color" jc="center">
            {colorScheme}
          </Paragraph>
          <StatusBar style="auto" />
        </YStack> */}
        <Stack backgroundColor="red" borderRadius={10}>
          <Text color="white">I AM TAMAGUI</Text>
        </Stack>
        <Text color="black">Hello avatar circle should be below this</Text>
        {/* <AvatarCircle pin="floating" featured />
        <SizedButton>This is a sized button</SizedButton> */}
        <Circle x={10} y={10} backgroundColor="red" />
      </Theme>
    </TamaguiProvider>
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
