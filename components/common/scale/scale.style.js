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
        justifyContent: "center",
    },
    scale: {
        marginTop: SIZES.xSmall * .4,
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        height: 8,
        borderRadius: SIZES.small,
    },
    numberLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.xSmall * .95,
    },
    numberLineText: {
        color: COLORS.gray,
        fontFamily: FONT.bold,
    },
    scaleBtn: (submitted = false) => ({
        alignSelf: 'flex-end',
        borderRadius: SIZES.small * 0.8,
        padding: SIZES.xSmall * 0.85,
        backgroundColor: submitted ? COLORS.primary : COLORS.tertiary,
        marginTop: SIZES.large,
        overflow: 'hidden'
    }),
    scaleBtnText: (submitted = false) => ({
        fontFamily: FONT.medium,
        fontSize: SIZES.large * 1.02,
        color: submitted ? COLORS.quaternary : COLORS.lightWhite
    })
})

export default styles