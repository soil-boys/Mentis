import { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

import { Welcome, Overview } from "../../components";

import { COLORS, FONT, icons, SIZES } from "../../constants";
import getGreeting from '../../utils/getGreeting'
import moment from "moment/moment";

function Home() {

    const [greeting, setGreeting] = useState(getGreeting(moment().format('HH')))
    const router = useRouter()
    
    useEffect(() => {
        setGreeting(getGreeting(moment().format('HH')))
    }, [])

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} overScrollMode="never">
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome time={greeting} />

                    <Overview />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;