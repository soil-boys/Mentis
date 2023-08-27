import { Video } from 'expo-av'
import { SafeAreaView, useWindowDimensions } from 'react-native'

function Splash({ animationVisible }) {


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <Video
                style={{ flex: 1 }}
                videoStyle={{ flexGrow: 1 }}
                source={require('../../assets/images/splash.mp4')}
                resizeMode='cover'
                useNativeControls={false}
                shouldPlay={animationVisible}
            />
        </SafeAreaView>
        )
        
    }
    
export default Splash
    // <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <LottieView
            autoPlay
            loop
            source={require('../../assets/animations/a1A5oRwmLT.json')}
            imageAssetsFolder='images'
        /> */}
    {/* </SafeAreaView> */}