import { Image } from "react-native";
import styles from "./tabbaricon.style";
import getGreeting from "../../../utils/getGreeting";

function TabBarIcon({ icon, color }) {
    return(
        <Image
            style={styles.navBtnImage(color)}
            source={icon}
            resizeMode="contain"
        />
    )
}

export default TabBarIcon