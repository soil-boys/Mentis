import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Welcome, Overview } from '../../components'

import { COLORS, SIZES, FONT } from '../../constants'

import { MoodWeek, MoodMonth } from '../../components'
import Graph from '../../components/common/graph/Graph'

function Analytics() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} overScrollMode="never">
                <View style={{ flex: 1, padding: SIZES.medium, gap: SIZES.xLarge }}>
                    {/* <Welcome time={'morning'} /> */}
                    <MoodWeek />
                    <MoodMonth />
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default Analytics