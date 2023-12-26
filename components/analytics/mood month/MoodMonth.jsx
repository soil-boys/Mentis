import { View, Text, ActivityIndicator } from "react-native";

import AnalyticsCard from "../../common/cards/analytics card/AnalyticsCard";
import Graph from "../../common/graph/Graph";

import styles from "./moodmonth.style";
import { COLORS } from "../../../constants";


function MoodMonth({ analysis, loadingAnalysis, graph, loadingGraph }) {

    const generateData = (arr) => {
        let data = arr.map((_, index) => ({ date: new Date(index), value: _ }))
        return data
    }
    
    return(

        <View style={styles.container}>
            <Text style={styles.text1}>Over the past month</Text>
            <View style={styles.moodContainer}>
                <View style={styles.daysContainer}>
                    <AnalyticsCard
                        label='days happy'
                        content={loadingAnalysis ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : (
                                <Text style={styles.text2}>{analysis.Happy}</Text>
                        )}
                        flipped={true}
                        width={false}
                        ripple
                    />
                    <AnalyticsCard
                        label='days okay'
                        content={loadingAnalysis ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : (
                                <Text style={styles.text2}>{analysis.Okay}</Text>
                        )}
                        flipped={true}
                        width={false}
                        ripple
                    />
                    <AnalyticsCard
                        label='days sad'
                        content={loadingAnalysis ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : (
                                <Text style={styles.text2}>{analysis.Sad}</Text>
                        )}
                        flipped={true}
                        width={false}
                        ripple
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', height: (!graph || graph?.length < 2) ? 80 : 200 }}>
                    <AnalyticsCard
                        label='graph'
                        content={loadingGraph ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : (
                                (!graph || graph?.length < 2) ? <Text style={styles.errText}>Not enough data</Text> : <Graph data={generateData(graph)} />
                        )}
                        width={false}
                        flex={true}
                    />
                </View>
            </View>
        </View>

    )
}

export default MoodMonth