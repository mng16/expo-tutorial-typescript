import { GetProps, Stack, styled, XStack } from "tamagui"; // or '@tamagui/core'
import { themes, tokens } from "@tamagui/themes";

export const Circle = styled(XStack, {
  name: "Circle",
  borderRadius: 2000,
});

// helper to get props for any TamaguiComponent
export type CircleProps = GetProps<typeof Circle>;
