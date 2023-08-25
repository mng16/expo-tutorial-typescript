import { GetProps, Stack, styled, XStack } from "tamagui"; // or '@tamagui/core'

export const Circle = styled(Stack, {
  name: "Circle",
  borderRadius: 100_000_000,
});
// helper to get props for any TamaguiComponent

// export type CircleProps = GetProps<typeof Circle>;
