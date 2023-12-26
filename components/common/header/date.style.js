import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: SIZES.large * 1.3,
        gap: 2
    },
    month: {
        fontSize: SIZES.xLarge * 0.9,
        fontFamily: FONT.bold,
        color: COLORS.gray,
        letterSpacing: 1
    },
    day: {
        fontSize: SIZES.xLarge * 0.9,
        fontFamily: FONT.bold,
        color: COLORS.primary,
        letterSpacing: 1
    },
    slash: {
        fontSize: SIZES.xLarge * 0.9,
        fontFamily: FONT.medium,
        color: COLORS.gray2
    }
})

export default styles