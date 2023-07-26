import { View, Text } from "react-native";

import styles from "./date.style";

function Date() {
    return (
        <View style={styles.container}>
            <Text style={styles.day}>26</Text>
            <Text style={styles.slash}>/</Text>
            <Text style={styles.month}>07</Text>
        </View>
    )
}

export default Date