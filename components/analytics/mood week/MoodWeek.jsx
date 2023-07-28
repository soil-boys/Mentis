import { Suspense } from "react";

import { View, Text } from "react-native";

import AnalyticsCard from "../../common/cards/analytics card/AnalyticsCard";
import Graph from "../../common/graph/Graph";

import { analyzeData, graphing } from "../../../functions/Analytics";

import styles from "./moodweek.style";
import { useEffect, useState } from "react";

function MoodWeek({ mood }) {

    const generateData = (arr) => {
        return arr.map((_, index) => ({ date: new Date(index), value: _ }))
    }

    useEffect(() => {
        const getData = async () => {
            let happy = await analyzeData('Happy')
            let sad = await analyzeData('Sad')
            let okay = await analyzeData('Okay')
            let graphDat = await graphing()
            setDaysHappy(happy)
            setDaysOkay(okay)
            setDaysSad(sad)
            setGraphData(generateData(graphDat))
        }
        getData()
    }, [])

    const [daysHappy, setDaysHappy] = useState(0)
    const [daysSad, setDaysSad] = useState(0)
    const [daysOkay, setDaysOkay] = useState(0)
    const [graphData, setGraphData] = useState([])

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
                        content={ (!graphData || graphData?.length < 2) ? <Text style={styles.errText}>Not enough data</Text> : <Graph data={graphData} /> }
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