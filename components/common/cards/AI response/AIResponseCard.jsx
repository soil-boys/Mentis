import React from 'react'
import { View, Text } from 'react-native'

import styles from './airesponsecard.style'

const AIResponseCard = ({ text }) => {
  if (!text) return null

  return (
    <View style={styles.container}>
      <Text style={styles.author}>AI</Text>
      <Text style={styles.responseText}>{text}</Text>
    </View>
  )
}

export default AIResponseCard