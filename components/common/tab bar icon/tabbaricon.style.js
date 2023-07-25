import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
    navBtn: {
        // flex: 1,
        // maxWidth: 200,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.xLarge * 100,
        marginHorizontal: SIZES.xLarge,
    },
    navBtnImage: (color) => ({
        width: 35,
        tintColor: color
    }),
})

export default styles