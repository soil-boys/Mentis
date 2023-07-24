import { View, Text, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './scale.style'
import { COLORS } from '../../../constants'

function Scale() {

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
                        style={{ flex: 1, transform: [{ scale: 1.1 }] }}
                        minimumValue={1}
                        maximumValue={5}
                        step={1}
                        minimumTrackTintColor='transparent'
                        maximumTrackTintColor='transparent'
                        thumbTintColor={COLORS.primary}
                    />
                </LinearGradient>
                <View style={styles.numberLine}>
                    {[1,2,3,4,5].map(number => ( <Text key={number} style={styles.numberLineText} >{number}</Text> ))}
                </View>

                <TouchableOpacity style={styles.scaleBtn} onPress={() => {}}>
                    <Text style={styles.scaleBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default Scale