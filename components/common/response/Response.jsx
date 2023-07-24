import React, { useRef } from "react"
import { View, FlatList, ActivityIndicator, Text } from "react-native"

import UserResponseCard from "../cards/user response/userResponseCard"
import styles from "./response.style"
import AIResponseCard from "../cards/AI response/AIResponseCard"
import useResponse from "../../../hook/useResponse"
import { SIZES, COLORS } from "../../../constants"

function Response({ prompts }) {

    // const promptsArr = prompts ? [...prompts] : []
    // const lastIndex = (!promptsArr || !prompts?.length) ? null : promptsArr.length
    // console.log(lastIndex)
    // const { data, isLoading, err } = useResponse(promptsArr[lastIndex ? lastIndex - 1 : lastIndex]?.text)
    // // console.log(data)

    const responses = [
        'Hi, how are you?',
        'Hey, you seem down? All good?',
        'Do you feel low? That\'s alright. I\' here to listen to you.',
        'You seem happy, what\'s up?',
        'What\'s the surprise about? (smirks)',
        'Hiiiiii. You seem happy. I am glad.'
    ]

    const ref = useRef(null)

    return (
        <View style={styles.container}>
            <View style={styles.responseWrapper}>
                <FlatList
                    ref={ref}
                    data={prompts}
                    renderItem={({ item }) => (
                        <>
                            <UserResponseCard text={item.prompt} />
                            <AIResponseCard text={item.response} />
                            {/* {isLoading ? (
                                <AIResponseCard text=''>
                                    <ActivityIndicator size="small" color={COLORS.lightWhite} />
                                </AIResponseCard>
                            ) : err ? (
                                <AIResponseCard text='Some went wrong' />
                            ) : (
                            )} */}
                        </>
                    )}
                    keyExtractor={prompt => prompt.key}
                    onContentSizeChange={() => ref.current.scrollToEnd()}
                    contentContainerStyle={{ rowGap: SIZES.medium }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Response