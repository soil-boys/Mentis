import moment from 'moment'
import { useEffect, useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import Slider from '@react-native-community/slider'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './scale.style'
import { COLORS, icons } from '../../../constants'

import { getData, storeData } from '../../../functions/Storage'

function Scale({ refetch }) {

    useEffect(() => {
        
        const getMoodData = async () => {
            // storeData('26122023', 4.7, 5, moment().subtract(2, 'day'))  
            // storeData('25122023', 2.3, 2, moment().subtract(3, 'day'))
            // storeData('24122023', 1.2, 1, moment().subtract(4, 'day'))
            // storeData('23122023', 3, 3, moment().subtract(5, 'day'))  
            // storeData('22122023', 4.2, 4, moment().subtract(6, 'day'))
            // storeData('21122023', 1.6, 2, moment().subtract(7, 'day'))
            // storeData('20122023', 1.9, 2, moment().subtract(8, 'day'))  
            // storeData('19122023', 2.1, 2, moment().subtract(9, 'day'))
            // storeData('18122023', 2.5789, 3, moment().subtract(10, 'day'))
            // storeData('17122023', 4.4, 5, moment().subtract(11, 'day'))  
            // storeData('15122023', 5, 5, moment().subtract(13, 'day'))
            // storeData('14122023', 3, 3, moment().subtract(14, 'day'))
            // storeData('13122023', 3.1, 3, moment().subtract(15, 'day'))  
            // storeData('10122023', 2.6, 3, moment().subtract(18, 'day'))
            let _ = await getData(moment().format('DDMMYYYY'))
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
                        style={{ width: '105%' }}
                        minimumValue={1}
                        maximumValue={5}
                        step={0}
                        value={value}
                        onSlidingComplete={(val) => {
                            setValue(val)
                        }}
                        minimumTrackTintColor='transparent'
                        maximumTrackTintColor='transparent'
                        thumbTintColor={submitted ? COLORS.primary : "#b87cf4"}
                        disabled={submitted}
                    />
                </LinearGradient>
                <View style={styles.numberLine}>
                    {[1,2,3,4,5].map(number => ( <Text key={number} style={styles.numberLineText}>{number}</Text> ))}
                </View>

                {!submitted ? (
                    <Pressable
                        style={styles.scaleBtn}
                        android_ripple={{ color: COLORS.white, radius: 5 }}
                        onPress={() => {
                            setSubmitted(true)
                            setDegree(Math.round(value))
                            storeData(moment().format('DDMMYYYY'), value, Math.round(value), moment())
                            refetch()
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