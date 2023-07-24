import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

function ScreenHeaderBtn({ iconUrl, dimension, handlePress, state }) {
  return (
    <TouchableOpacity style={styles.btnContainer(state)} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={styles.btnImg(dimension, state)}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn