import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AnalyticsCard from "../../common/cards/analytics card/AnalyticsCard";
import Graph from "../../common/graph/Graph";

import { analyzeData, graphing } from "../../../functions/Analytics"; 

import styles from "./moodmonth.style";


function MoodMonth() {

    const generateData = (arr) => {
        return arr.map((_, index) => ({ date: new Date(index), value: _ }))
    }
    
    useEffect(() => {

        const getData = async () => {
            let happy = await analyzeData('Happy', 'month')
            let sad = await analyzeData('Sad', 'month')
            let okay = await analyzeData('Okay', 'month')
            let graphDat = await graphing('month')
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
                <View style={{ flex: 1, flexDirection: 'row', height: (!graphData || graphData?.length < 2) ? 80 : 200 }}>
                    <AnalyticsCard
                        label='graph'
                        content={ (!graphData || graphData?.length < 2) ? <Text style={styles.errText}>Not enough data</Text> : <Graph data={graphData} /> }
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