import React from 'react'
import { Text, Pressable } from 'react-native'

import styles from './analyticscard.style.'
import { COLORS } from '../../../../constants'

const AnalyticsCard = ({ label, content, flipped, flex, ripple = false, width = true }) => {
  return (

    <Pressable style={styles.boxContainer(flipped, flex, width)} disabled={ripple ? false : true} android_ripple={{ color: COLORS.secondary, radius: .1 }}>
      {content}
      <Text style={styles.label}>{label}</Text>
    </Pressable>

  )
}

export default AnalyticsCard