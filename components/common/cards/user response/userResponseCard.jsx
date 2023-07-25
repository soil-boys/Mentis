import React from 'react'
import { View, Text } from 'react-native'

import styles from './userreponsecard.style'

const UserResponseCard = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>You</Text>
      <Text style={styles.responseText}>{text}</Text>
    </View>
  )
}

export default UserResponseCard