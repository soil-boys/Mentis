import { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, FONT, icons, SIZES } from "../constants";
import { Welcome, Overview } from "../components";
import useGreeting from '../utils/getGreeting'
import moment from "moment/moment";

console.reportErrorsAsExceptions = false;

function Home() {

    const [greeting, setGreeting] = useState(useGreeting(moment().format('HH')))
    const router = useRouter()
    
    useEffect(() => {
        setGreeting(useGreeting(moment().format('HH')))
    }, [])

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerTitleStyle: { fontFamily: FONT.medium, color: COLORS.secondary },
                    headerTitle: `Good ${greeting}`,
                }}
            />

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome time={greeting} />

                    <Overview />
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}

export default Home;