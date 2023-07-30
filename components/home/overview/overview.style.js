import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: SIZES.xLarge,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    text1: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginBottom: SIZES.small
    },
    text2: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.secondary,
    },
    boxContainer: (flipped = false) => ({
        backgroundColor: COLORS.quaternary,
        borderRadius: SIZES.small * 0.8,
        padding: SIZES.small,
        marginBottom: SIZES.medium,
        justifyContent: 'flex-end',
        alignItems: flipped ? 'flex-start' : 'flex-end',
        alignSelf: flipped ? 'flex-start' : 'flex-end',
        textAlign: flipped ? 'left' : 'right'
    }),
    boxText: (flipped = false) => ({
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge * 1.6,
        color: COLORS.primary,
        textTransform: flipped ? 'lowercase' : 'capitalize',
        paddingRight: flipped ? 0 : SIZES.xSmall / 2,
        paddingLeft: flipped ? SIZES.xSmall / 2 : 0,
    }),
    emoText: (flipped = false) => ({
        marginTop: SIZES.xSmall * -.3,
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.gray,
        textAlign: flipped ? 'left' : 'right'
    })
})

export default styles