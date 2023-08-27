import { useCallback, useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, RefreshControl, Image } from "react-native";

import { Welcome, Overview, Scale } from "../../components";
import { COLORS, SIZES } from "../../constants";
import useData from "../../hooks/useData";
import useGreeting from "../../hooks/useGreeting";

function Home() {

    const { mood, loadingMood, fluctuations, loadingFluctuations, refetch } = useData()
    const greeting = useGreeting()

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    }, [])

    return(
        <>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }
            >
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome time={greeting} />
                    <Scale refetch={refetch} />
                    <Overview
                        mood={mood}
                        loadingMood={loadingMood}
                        fluctuations={fluctuations}
                        loadingFluctuations={loadingFluctuations}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default Home;