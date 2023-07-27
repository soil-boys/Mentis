import moment from 'moment'
import { useState, useEffect } from 'react'

import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { COLORS, SIZES, FONT } from '../../constants'

import { MoodWeek, MoodMonth } from '../../components'

import getMood from '../../utils/getMood'

function Analytics() {
    
    const [mood, setMood] = useState('Okay')
    
    useEffect(() => {
        const getData = async () => {
            let _ = await getMood()
            setMood(_)
        }
        getData()
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} overScrollMode="never">
                <View style={{ flex: 1, padding: SIZES.medium, gap: SIZES.xLarge }}>
                    {/* <Welcome time={'morning'} /> */}
                    <MoodWeek mood={mood} />
                    <MoodMonth />
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default Analytics