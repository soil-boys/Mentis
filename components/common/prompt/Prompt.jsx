import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, Image } from "react-native"

import { icons } from "../../../constants"
import styles from "./prompt.style"


function Prompt({ prompts, setPrompts, setTakePicture }) {

    const [prompt, setPrompt] = useState('')

    const responses = [
        'Hi, how are you?',
        'Hey, you seem down? All good?',
        'Do you feel low? That\'s alright. I\' here to listen to you.',
        'You seem happy, what\'s up?',
        'What\'s the surprise about? (smirks)',
        'Hiiiiii. You seem happy. I am glad.'
    ]

    return (
        <>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={prompt}
                        placeholder='Tell me'
                        onChangeText={(text) => setPrompt(text)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={() => {
                        if (prompt !== '') {
                            setTakePicture(true)
                            const arr = [...prompts]
                            arr.push({ prompt: prompt, response: responses[Math.floor(Math.random() * responses.length)], key: Date.now() })
                            setPrompts(arr)
                            setPrompt('')
                        }
                    }}
                >
                    <Image
                        source={icons.chevronRight}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Prompt

