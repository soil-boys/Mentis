import 'node-libs-react-native/globals'

import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

console.reportErrorsAsExceptions = false;

export {ErrorBoundary } from 'expo-router';
  
export const unstable_settings = {
    initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

function Layout() {

    const [loadedFonts] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (loadedFonts) await SplashScreen.hideAsync()
    }, [loadedFonts])

    if (!loadedFonts) return null;

    return (
        <>
            <Stack onLayout={onLayoutRootView}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
            </Stack>
        </>
    )
}

export default Layout;