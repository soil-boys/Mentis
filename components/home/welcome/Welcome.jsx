import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Pressable, Image } from 'react-native'

import styles from './welcome.style'
import { getUsername, storeUsername } from '../../../functions/Storage';
import { COLORS, icons } from '../../../constants'

function Welcome({ time }) {

  const [username, setUsername] = useState(undefined)
  const [editing, setEditing] = useState(false)
  const [text, onChangeText] = useState('User')

  const whitespaceRegex = /^(\s+|\0+)$/gmi

  const handlePress = (e) => {
    if (editing) {
      if (text === '' || whitespaceRegex.test(text)) return
      
      storeUsername(text)
      setUsername(text)
      setEditing(false)
    } else setEditing(true)
  }

  const getUsernameData = async () => {
    let value = await getUsername()
    setUsername(value)
    onChangeText(value ? value : 'User')
  }
  
  useEffect(() => {
    getUsernameData()
  }, [username])

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameText}>{time === 'night' ? '' : 'Hello'}</Text>
          <View style={styles.userNameEditContainer}>
            <TextInput
              style={styles.userName(username, editing)}
              value={text}
              onChangeText={onChangeText}
              editable={editing}
            />
            <Pressable
              style={styles.editBtn(editing)}
              android_ripple={{ color: COLORS.gray, radius: 5 }}
              onPress={handlePress}
            >
              <Image
                style={styles.editBtnImage}
                source={editing ? icons.check : icons.edit}
                resizeMode='contain'
              />
            </Pressable>
          </View>
        </View>
        <Text style={styles.welcomeMessage}>{`How ${time === 'night' ? 'was' : 'is'} your mood today?`}</Text>
      </View>
    </View>
  )
}

export default Welcome