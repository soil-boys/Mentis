import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'

import Scale from '../../common/scale/Scale'
import OverallMood from '../../common/overall mood/OverallMood'

import styles from './welcome.style'
// import { COLORS, icons, SIZES } from '../../../constants'

function Welcome() {
  const router = useRouter()

  const user = 'Risu'

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {user}</Text>
        <Text style={styles.welcomeMessage}>How is your mood today?</Text>
      </View>

      <Scale />

      <OverallMood />

    </View>
  )
}

export default Welcome