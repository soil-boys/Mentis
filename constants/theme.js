const COLORS = {
  primary: "#6d5f94",
  secondary: "#444262",
  // tertiary: "#63808f",
  tertiary: "#FF7754",
  quaternary: "#cbdbf5",

  gray: "#83829A",
  gray2: "#C1C0C8",
  gray3: "#46484d",
  gray4: "#cccccc28",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  blue: "#4484B2",
  red: '#de4040'
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
