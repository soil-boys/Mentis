import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
// import { COLORS, icons, SIZES } from '../../../constants'

function Welcome({ time }) {
  const router = useRouter()

  const user = 'Risu'

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.userName}>{`${time === 'night' ? '' : 'Hello '}${user}`}</Text>
        <Text style={styles.welcomeMessage}>{`How ${time === 'night' ? 'was' : 'is'} your mood today?`}</Text>
      </View>

    </View>
  )
}

export default Welcome