import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch'
    },
    moodContainer: {
        flexDirection: "column",
        rowGap: SIZES.medium
    },
    daysContainer: {
        flex: 1,
        flexDirection: 'row',
        columnGap: SIZES.medium,
        justifyContent: 'flex-end'
    },
    text1: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        alignSelf: 'flex-end',
        marginBottom: SIZES.small
    },
    text2: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge * 1.6,
        color: COLORS.primary,
    },
})

export default styles