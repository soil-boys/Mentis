import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        zIndex: 999,
        backgroundColor: COLORS.gray4
    },
    navContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        columnGap: SIZES.xLarge * 2,
        paddingHorizontal: SIZES.xLarge * 1.2,
        paddingVertical: SIZES.xSmall / 2
    },
    navBtn: (active = false) => ({
        flex: 1,
        maxWidth: 200,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: active ? COLORS.tertiary : COLORS.gray4,
        borderRadius: SIZES.xLarge * 100
    }),
    navBtnImg: (active = false) => ({
        width: 40,
        tintColor: active ? COLORS.lightWhite : COLORS.primary,
    })
})

export default styles