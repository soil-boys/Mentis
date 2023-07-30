import { View, Text, ActivityIndicator } from "react-native";

import AnalyticsCard from "../../common/cards/analytics card/AnalyticsCard";
import Graph from "../../common/graph/Graph";

import styles from "./moodweek.style";
import { COLORS } from "../../../constants";

function MoodWeek({ mood, loadingMood, analysis, loadingAnalysis, graph, loadingGraph  }) {

    const generateData = (arr) => {
        return arr.map((_, index) => ({ date: new Date(index), value: _ }))
    }

    return(

        <View style={styles.container}>
            <Text style={styles.text1}>Over the past week</Text>
            <View style={styles.moodContainer}>
                <View style={{ flex: 1 }}>
                    <AnalyticsCard
                        label='overall mood'
                        content={loadingMood ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : (
                                <Text style={styles.text2}>{mood}</Text>
                        )}
                        flipped={true}
                        ripple
                    />
                    <AnalyticsCard
                        label='graph'
                        content={loadingGraph ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : (
                                (!graph || graph?.length < 2) ? <Text style={styles.errText}>Not enough data</Text> : <Graph data={generateData(graph)} />
                        )}
                        flipped={true}
                        flex={true}
                    />
                </View>
                <View style={styles.daysContainer}>
                    <AnalyticsCard
                        label='days happy'
                        content={loadingAnalysis ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : (
                                <Text style={styles.text2}>{analysis.Happy}</Text>
                        )}
                        flipped={false}
                        flex={true}
                        ripple
                    />
                    <AnalyticsCard
                        label='days okay'
                        content={loadingAnalysis ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : (
                                <Text style={styles.text2}>{analysis.Okay}</Text>
                        )}
                        flipped={false}
                        flex={true}
                        ripple
                    />
                    <AnalyticsCard
                        label='days sad'
                        content={loadingAnalysis ? (
                                <ActivityIndicator size="large" color={COLORS.primary} />
                            ) : (
                                <Text style={styles.text2}>{analysis.Sad}</Text>
                        )}
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