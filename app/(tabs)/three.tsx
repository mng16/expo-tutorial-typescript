import { StyleSheet, useColorScheme } from "react-native";

import { useFonts } from "expo-font";
import {
  Paragraph,
  Spacer,
  Stack,
  TamaguiProvider,
  Theme,
  YStack,
  Text,
  styled,
  GetProps,
} from "tamagui";
import { StatusBar } from "expo-status-bar";
import config from "../../tamagui.config";
import { themes, tokens } from "@tamagui/themes";
// import { Circle } from "../../components/tamagui-components/Circle";

export const Circle = styled(YStack, {
  name: "Circle",
  borderRadius: 2000,
  minWidth: 282,
  maxWidth: 282,
  minHeight: 312,
  maxHeight: 312,
});

// helper to get props for any TamaguiComponent
export type CircleProps = GetProps<typeof Circle>;

export default function TabOneScreen() {
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
        <Circle x={200} y={10} backgroundColor="blue" />
        {/* <AvatarCircle pin="floating" featured />
        <SizedButton>This is a sized button</SizedButton> */}
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
