import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";

console.reportErrorsAsExceptions = false;

function Home() {

    const router = useRouter()
    
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerTitle: "Good Evening",
                }}
            />

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}

export default Home;