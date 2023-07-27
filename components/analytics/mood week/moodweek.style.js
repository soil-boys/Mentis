import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    moodContainer: {
        flex: 1,
        flexDirection: "row",
        alignContent: 'center',
        columnGap: SIZES.medium
    },
    daysContainer: {
        // flex: 1,
        flexDirection: 'column',
        rowGap: SIZES.xSmall / 10,
    },
    text1: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginBottom: SIZES.small
    },
    text2: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge * 1.6,
        color: COLORS.primary,
        // paddingRight: SIZES.xSmall,
        // paddingLeft: SIZES.xSmall,
    },
    errText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge * 1.3,
        color: COLORS.red,
    }
})

export default styles