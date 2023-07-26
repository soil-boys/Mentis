import { StyleSheet } from "react-native"

import { COLORS, FONT, SIZES } from "../../../../constants"

const styles = StyleSheet.create({
  boxContainer: (flipped, flex = false, width = true) => ({
    height: flex ? '100%' : 'auto',
    width: width ? '100%' : 'auto',
    flex: flex ? 1 : 0,
    backgroundColor: COLORS.quaternary,
    borderRadius: SIZES.small * 0.8,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
    justifyContent: flipped ? 'flex-end' : 'flex-start',
    alignItems: flipped ? 'flex-start' : 'flex-end',
    alignSelf: flipped ? 'flex-start' : 'flex-end',
    // gap: SIZES.xSmall
  }),
  label: {
    // marginTop: SIZES.xSmall,
    textTransform: 'uppercase',
    fontFamily: FONT.bold,
    fontSize: SIZES.small * 1.1,
    color: COLORS.gray,
  },
})

export default styles
