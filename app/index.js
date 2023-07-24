import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Stack } from "expo-router";

import { COLORS, icons, SIZES } from "../constants/theme";

function Home() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }} >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={!permission.granted() ? icons.videoOff : (turnedOn === true ? icons.videoOn : icons.videoOff)}
                            dimension={turnedOn === false ? '65%' : '62%'}
                            handlePress={setupCamera}
                            state={!permission.granted() ? false : (turnedOn === true ? true : false)}
                        />
                    ),
                    headerTitle: "Good Evening",
                }}
            />

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome
                        permission={permission}
                        turnedOn={turnedOn}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )

}

export default Home