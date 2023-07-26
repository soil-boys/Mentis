import React from 'react'
import { View, Text, Pressable } from 'react-native'

import getResponse from '../../../utils/getResponse'

import styles from './overview.style'
import { COLORS } from '../../../constants'

function Overview() {

    const mood = 'Okay'
    const fluctuations = 15

    return (
        <View style={{ flex: 1 }}>
        <View style={styles.container}>
            <Text style={styles.text1}>Over the past week</Text>
            <Pressable style={styles.boxContainer()} android_ripple={{ color: COLORS.secondary, radius: .1 }}>
                <Text style={styles.text2}>Your overall mood was</Text>
                <Text style={styles.boxText()}>{mood}</Text>
                <Text style={styles.emoText}>{getResponse(mood)}</Text>
                {/* {mood === 'Sad' ? (
                    <Text style={styles.emoText}>Hope you're alright...</Text>
                ) : mood === 'Bad' ? (
                    <Text style={styles.emoText}>It'll be alright...</Text>
                ) : mood === 'Good' ? (
                    <Text style={styles.emoText}>Good going!</Text>
                ) : null} */}
            </Pressable>
            <Pressable style={styles.boxContainer(true)} android_ripple={{ color: COLORS.secondary, radius: .1 }}>
                <Text style={styles.text2}>It fluctuated</Text>
                <Text style={styles.boxText(true)}>{`${fluctuations} times`}</Text>
            </Pressable>
        </View>

        </View>
    )
}

export default Overview