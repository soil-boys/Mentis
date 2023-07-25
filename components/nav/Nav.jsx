import React, { useState } from 'react'
import { Text, View, Pressable, Image } from 'react-native'

import styles from './nav.style'
import { icons, COLORS } from '../../constants'
import { useRouter, Link, Navigator } from 'expo-router'

function Nav() {

    const router = useRouter()

    const [active, setActive] = useState('home')

    return (
        <View style={styles.container}>
            <View style={styles.navContainer}>
                <Link replace href='/' asChild>
                    <Pressable
                        style={styles.navBtn(active === 'home' ? true : false)}
                        android_ripple={{ color: COLORS.secondary, radius: .5 }}
                        disabled={active === 'home' ? true : false}
                        onPress={() => {
                            setActive('home')
                        }}
                    >
                        <Image
                            style={styles.navBtnImg(active === 'home' ? true : false)}
                            source={icons.home}
                            resizeMode='contain'
                        />
                    </Pressable>
                </Link>
                <Link href='/analytics' asChild >
                    <Pressable
                        style={styles.navBtn(active === 'analytics' ? true : false)}
                        android_ripple={{ color: COLORS.secondary, radius: .5 }}
                        disabled={active === 'analytics' ? true : false}
                        onPress={() => {
                            setActive('analytics')
                        }}
                    >
                        <Image
                            style={styles.navBtnImg(active === 'analytics' ? true : false)}
                            source={icons.analytics}
                            resizeMode='contain'
                        />
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}

export default Nav