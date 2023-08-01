import 'node-libs-react-native/globals'

import { Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import * as Font from 'expo-font'
import * as SplashScreen from "expo-splash-screen";
import Splash from '../components/screens/Splash';

console.reportErrorsAsExceptions = false;

export { ErrorBoundary } from 'expo-router';
  
export const unstable_settings = {
    initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

function Layout() {

    const [loading, setLoading] = useState(true)
    const [animationVisible, setAnimationVisible] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setAnimationVisible(false)
        }, 3000);
    } , [])

    useEffect(() => {
        async function load() {
            try {
                await Font.loadAsync({
                    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
                    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
                    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
                })
            } catch (err) {
                console.warn(err)
            } finally {
                setLoading(false)
            }
        }

        load()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (!loading) await SplashScreen.hideAsync()
    }, [loading])

    if (loading) return null;

    return (
        animationVisible ? (
            <Splash animationVisible={animationVisible} />
        ) : (
            <Stack onLayout={onLayoutRootView}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
            </Stack>
        )
    )
}

export default Layout;