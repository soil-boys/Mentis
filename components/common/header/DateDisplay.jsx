import { View, Text } from "react-native";

import moment from "moment/moment";

import styles from "./date.style";
import { useEffect, useState } from "react";

function DateDisplay() {

    const [date, setDate] = useState(moment())
    // useEffect(() => {
    //     setInterval(() => setDate(moment()))
    // }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.day}>{date.format('DD')}</Text>
            <Text style={styles.slash}>/</Text>
            <Text style={styles.month}>{date.format('MM')}</Text>
        </View>
    )
}

export default DateDisplay