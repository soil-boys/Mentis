import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './overview.style'
import { COLORS } from '../../../constants'

function Overview() {
    const router = useRouter()

    const mood = 'bad'
    const fluctuation = 15

    return (
        <View style={{ flex: 1 }}>
        <View style={styles.container}>
            <Text style={styles.text1}>Over the past month</Text>
            <Pressable style={styles.boxContainer()} android_ripple={{ color: COLORS.secondary, radius: 1 }}>
                <Text style={styles.text2}>Your overall mood was</Text>
                <Text style={styles.boxText()}>{mood}</Text>
                {(mood === 'sad' || mood === 'bad') ? (<Text style={styles.emoText}>Hope you're alright...</Text>) : null }
            </Pressable>
            <Pressable style={styles.boxContainer(true)} android_ripple={{ color: COLORS.secondary, radius: 1 }}>
                <Text style={styles.text2}>It fluctuated</Text>
                <Text style={styles.boxText(true)}>{`${fluctuation} times`}</Text>
            </Pressable>
        </View>

        </View>
    )
}

export default Overview