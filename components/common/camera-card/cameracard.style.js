import { StyleSheet } from "react-native";
import { FONT, COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.gray,
        zIndex: 9,
        // margin: SIZES.small,
        marginTop: SIZES.small,
        marginRight: SIZES.small * -0.5,
        right: 0,
        top: 0,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        // aspectRatio: 1
    },
    containerHidden: {
        position: 'absolute',
        display: 'none'
    },
    camera: {
        maxWidth: 200,
        width: 150,
        height: 150,
        zIndex: 10,
        position: 'relative'
    },
    toggleBtn: {
        width: 40,
        height: 40,
        flex: 1,
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 11,
        justifyContent: 'center',
        alignItems: "center",
        margin: SIZES.xSmall / 2
    },
    toggleBtnImage: {
        width: '70%',
        height: '70%',
        tintColor: '#ffffff'
    }
})

export default styles