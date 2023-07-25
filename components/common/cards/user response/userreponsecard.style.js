import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    maxWidth: '90%',
    height: 'auto',
    padding: SIZES.xSmall,
    backgroundColor: COLORS.gray3,
    borderRadius: SIZES.small,
    justifyContent: "space-between",
    position: 'relative',
    alignSelf: 'flex-end',
    // marginTop: SIZES.small
  },
  author: {
    fontSize: SIZES.medium * 1.06,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
    textAlign: 'right'
  },
  responseText: {
    fontSize: SIZES.small * 1.35,
    fontFamily: FONT.regular,
    color: COLORS.white,
    textAlign: 'right'
  }
});

export default styles;
