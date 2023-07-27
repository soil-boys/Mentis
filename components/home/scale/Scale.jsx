import moment from 'moment'
import { useEffect, useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import Slider from '@react-native-community/slider'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './scale.style'
import { COLORS, SIZES, icons, images } from '../../../constants'

import { getData, storeData } from '../../../functions/Storage'

function Scale() {

    useEffect(() => {
        const getMoodData = async () => {
            let _ = await getData(moment().format('DDMMYYYY'))
            console.log()
            setValue((_ && Object.keys(_)?.length === 3) ? _.value : 3)
            setSubmitted((_ && Object.keys(_)?.length === 3) ? true : false)
        }
        getMoodData()
    }, [])

    const [value, setValue] = useState(3)
    const [degree, setDegree] = useState(Math.round(value))
    const [submitted, setSubmitted] = useState(false)
    
    return (
        <View style={styles.container}>
            <View style={styles.scaleContainer}>
                <LinearGradient
                    colors={['#f06e6e', '#92ffa7']}
                    style={styles.scale}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Slider
                        style={{ width: '110%' }}
                        minimumValue={1}
                        maximumValue={5}
                        step={0}
                        value={value}
                        onSlidingComplete={(val) => {
                            setValue(val)
                        }}
                        minimumTrackTintColor='transparent'
                        maximumTrackTintColor='transparent'
                        thumbImage={images.thumb}
                        disabled={submitted}
                    />
                </LinearGradient>
                <View style={styles.numberLine}>
                    {[1,2,3,4,5].map(number => ( <Text key={number} style={styles.numberLineText} >{number}</Text> ))}
                </View>

                {!submitted ? (
                <Pressable
                    style={styles.scaleBtn}
                    android_ripple={{ color: COLORS.white, radius: 5 }}
                    onPress={() => {
                        setSubmitted(true)
                        setDegree(Math.round(value))
                        storeData({
                            key: moment().format('DDMMYYYY'),
                            value: value,
                            degree: Math.round(value),
                            timestamp: moment()
                        })
                    }}
                >
                    <Text style={styles.scaleBtnText}>{submitted ? 'Submitted' : 'Submit'}</Text>
                </Pressable>
                ) : (
                    <Pressable
                    style={styles.editBtn}
                    android_ripple={{ color: COLORS.white, radius: 5 }}
                    onPress={() => setSubmitted(false)}
                >
                    <Image
                        style={styles.editBtnImage}
                        source={icons.edit}
                        resizeMode='contain'
                    />
                </Pressable>
                )}
            </View>
        </View>
    )

}

export default Scale