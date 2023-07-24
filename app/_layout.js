import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;