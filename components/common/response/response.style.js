import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginTop: SIZES.small,
    },
    responseWrapper: {
        flex: 1,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.quaternary,
        padding: SIZES.small,
    },
    responseText: {
        fontSize: SIZES.small * 1.35,
        fontFamily: FONT.regular,
        color: COLORS.white,
        textAlign: 'left'
    }
})

export default styles