import { Stack, Theme, styled } from "tamagui"; // or '@tamagui/core'

const AvatarCircle = styled(Stack, {
  // use direct values

  backgroundColor: "blue",
  // or use values typed in createTamagui() themes and tokens

  shadowColor: "$color2",
  pressStyle: {
    scale: 1.05,
  },
  variants: {
    pin: {
      floating: {
        position: "absolute",

        top: "$xs",

        left: "$xs",
      },
    },
    featured: {
      true: {
        scale: 1.1,

        borderRadius: 12,
      },
    },
  },
});

export default AvatarCircle;
