import { View, Text } from "react-native";

import AnalyticsCard from "../../common/cards/analytics card/AnalyticsCard";
import Graph from "../../common/graph/Graph";

import styles from "./moodmonth.style";

function MoodMonth() {

    const generateData = (number) => {
        return Array(number).fill(0).map((_, index) => ({ date: new Date(index), value: Math.tan(index) }))
    }

    return(

        <View style={styles.container}>
            <Text style={styles.text1}>Over the past month</Text>
            <View style={styles.moodContainer}>
                <View style={styles.daysContainer}>
                    <AnalyticsCard
                        label='days happy'
                        content={ <Text style={styles.text2}>19</Text> }
                        flipped={true}
                        // flex={true}
                        width={false}
                        ripple
                    />
                    <AnalyticsCard
                        label='days okay'
                        content={ <Text style={styles.text2}>10</Text> }
                        flipped={true}
                        // flex={true}
                        width={false}
                        ripple
                    />
                    <AnalyticsCard
                        label='days sad'
                        content={ <Text style={styles.text2}>2</Text> }
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