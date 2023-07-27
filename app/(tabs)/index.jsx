import moment from "moment";
import { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

import { Welcome, Overview, Scale } from "../../components";
import { COLORS, FONT, icons, SIZES } from "../../constants";

import getGreeting from '../../utils/getGreeting'
import getMood from "../../utils/getMood";
import { getData } from "../../functions/Storage";

function Home() {

    const [greeting, setGreeting] = useState(getGreeting(moment().format('HH')))
    const [mood, setMood] = useState('Okay')
    const router = useRouter()
    
    useEffect(() => {
        const getData = async () => {
            let _ = await getMood()
            setMood(_)
        }
        getData()
        // setInterval(async () => {
        //     await getData()
        // }, 60000);
        setGreeting(getGreeting(moment().format('HH')))
    }, [moment().format('MM')])

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} overScrollMode="never">
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome time={greeting} />
                    <Scale />
                    <Overview mood={mood} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;