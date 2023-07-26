import { View, Text } from "react-native";

import AnalyticsCard from "../../common/cards/analytics card/AnalyticsCard";
import Graph from "../../common/graph/Graph";

import styles from "./moodweek.style";

function MoodWeek() {

    const generateData = (number) => {
        return Array(number).fill(0).map((_, index) => ({ date: new Date(index), value: Math.sin(index) }))
    }

    return(

        <View style={styles.container}>
            <Text style={styles.text1}>Over the past week</Text>
            <View style={styles.moodContainer}>
                <View style={{ flex: 1 }}>
                    <AnalyticsCard
                        label='overall mood'
                        content={ <Text style={styles.text2}>Good</Text> }
                        flipped={true}
                        ripple
                        // flex={true}
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
                        content={ <Text style={styles.text2}>2</Text> }
                        flipped={false}
                        flex={true}
                        ripple
                    />
                    <AnalyticsCard
                        label='days okay'
                        content={ <Text style={styles.text2}>3</Text> }
                        flipped={false}
                        flex={true}
                        ripple
                    />
                    <AnalyticsCard
                        label='days sad'
                        content={ <Text style={styles.text2}>2</Text> }
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