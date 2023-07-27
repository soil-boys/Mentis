import { View, Text } from "react-native";

import AnalyticsCard from "../../common/cards/analytics card/AnalyticsCard";
import Graph from "../../common/graph/Graph";

import { analyzeData } from "../../../functions/Analytics";

import styles from "./moodweek.style";
import { useEffect, useState } from "react";

function MoodWeek({ mood }) {

    const generateData = (number) => {
        return Array(number).fill(0).map((_, index) => ({ date: new Date(index), value: Math.sin(index) }))
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
            <Text style={styles.text1}>Over the past week</Text>
            <View style={styles.moodContainer}>
                <View style={{ flex: 1 }}>
                    <AnalyticsCard
                        label='overall mood'
                        content={ <Text style={styles.text2}>{mood}</Text> }
                        flipped={true}
                        ripple
                    />
                    <AnalyticsCard
                        label='graph'
                        content={ <Graph data={generateData(9)} /> }
                        flipped={true}
                        flex={true}
                    />
                </View>
                <View style={styles.daysContainer}>
                    <AnalyticsCard
                        label='days happy'
                        content={ <Text style={styles.text2}>{daysHappy}</Text> }
                        flipped={false}
                        flex={true}
                        ripple
                    />
                    <AnalyticsCard
                        label='days okay'
                        content={ <Text style={styles.text2}>{daysOkay}</Text> }
                        flipped={false}
                        flex={true}
                        ripple
                    />
                    <AnalyticsCard
                        label='days sad'
                        content={ <Text style={styles.text2}>{daysSad}</Text> }
                        flipped={false}
                        flex={false}
                        ripple
                    />
                </View>
            </View>
        </View>

    )
}

export default MoodWeek