import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AnalyticsCard from "../../common/cards/analytics card/AnalyticsCard";
import Graph from "../../common/graph/Graph";

import { analyzeData } from "../../../functions/Analytics"; 

import styles from "./moodmonth.style";


function MoodMonth() {

    const generateData = (number) => {
        return Array(number).fill(0).map((_, index) => ({ date: new Date(index), value: Math.tan(index) }))
    }
    
    useEffect(() => {

        const getData = async () => {
            let happy = await analyzeData('Happy')
            let sad = await analyzeData('Sad')
            let okay = await analyzeData('Okay')
            setDaysHappy(happy)
            setDaysOkay(okay)
            setDaysSad(sad)
        }
        getData()
    })

    const [daysHappy, setDaysHappy] = useState(0)
    const [daysSad, setDaysSad] = useState(0)
    const [daysOkay, setDaysOkay] = useState(0)

    return(

        <View style={styles.container}>
            <Text style={styles.text1}>Over the past month</Text>
            <View style={styles.moodContainer}>
                <View style={styles.daysContainer}>
                    <AnalyticsCard
                        label='days happy'
                        content={ <Text style={styles.text2}>{daysHappy}</Text> }
                        flipped={true}
                        // flex={true}
                        width={false}
                        ripple
                    />
                    <AnalyticsCard
                        label='days okay'
                        content={ <Text style={styles.text2}>{daysOkay}</Text> }
                        flipped={true}
                        // flex={true}
                        width={false}
                        ripple
                    />
                    <AnalyticsCard
                        label='days sad'
                        content={ <Text style={styles.text2}>{daysSad}</Text> }
                        flipped={true}
                        // flex={false}
                        width={false}
                        ripple
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', height: 200 }}>
                    <AnalyticsCard
                        label='graph'
                        content={ <Graph data={generateData(9)} /> }
                        // flipped={true}
                        width={false}
                        flex={true}
                    />
                </View>
            </View>
        </View>

    )
}

export default MoodMonth