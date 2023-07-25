import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: SIZES.medium
    },
    scaleContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.quaternary,
        borderRadius: SIZES.small * 0.8,
        padding: SIZES.medium,
    },
    scale: {
        height: 8,
        borderRadius: SIZES.small,
    },
    numberLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.xSmall * .8,
    },
    numberLineText: {
        color: COLORS.gray,
        fontFamily: FONT.bold,
    },
    scaleBtn: {
        alignSelf: 'flex-end',
        borderRadius: SIZES.small * 0.8,
        padding: SIZES.xSmall * 0.8,
        backgroundColor: COLORS.tertiary,
        marginTop: SIZES.large
    },
    scaleBtnText: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large * 1.02,
        color: COLORS.lightWhite
    }
})

export default styles