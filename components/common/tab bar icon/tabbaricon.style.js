import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
    navBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.xLarge * 100,
        marginHorizontal: SIZES.xLarge * 2,
        marginVertical: SIZES.xSmall / 5,
        paddingVertical: SIZES.xSmall / 5,
        justifySelf: 'center'
    },
    navBtnImage: (color) => ({
        width: 30,
        tintColor: color
    }),
})

export default styles