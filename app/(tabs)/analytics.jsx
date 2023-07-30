import moment from 'moment'
import { useState, useCallback } from 'react'

import { MoodWeek, MoodMonth } from '../../components'

import useAnalysis from '../../hooks/useAnalysis'
import useMood from '../../hooks/useMood'

import { View, Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import { COLORS, SIZES, FONT } from '../../constants'
import useGraphing from '../../hooks/useGraphing'

function Analytics() {
    
    const { mood, loadingMood, refetchMood } = useMood()
    const { analysis, loadingAnalysis, refetchAnalysis } = useAnalysis()
    const { graph, loadingGraph, refetchGraph } = useGraphing()

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetchAnalysis()
        refetchGraph()
        refetchMood()
        setRefreshing(false)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }
            >
                <View style={{ flex: 1, padding: SIZES.medium, gap: SIZES.xLarge }}>
                    <MoodWeek
                        mood={mood}
                        loadingMood={loadingMood}
                        analysis={analysis.week}
                        loadingAnalysis={loadingAnalysis}
                        graph={graph.week}
                        loadingGraph={loadingGraph}
                    />
                    <MoodMonth
                        analysis={analysis.month}
                        loadingAnalysis={loadingAnalysis}
                        graph={graph.month}
                        loadingGraph={loadingGraph}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default Analytics