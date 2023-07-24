import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";

import styles from "./cameracard.style";
import { icons } from "../../../constants";

function CameraCard({ takePicture, setTakePicture}) {
    
    const refCamera = useRef(null)
    const [type, setType] = useState(CameraType.front)

    // const capture = async () => {
    //     console.log(takePicture)
    //     if (takePicture) {
    //         refCamera.current.takePictureAsync().then(picture => {
    //             console.log(picture)
    //             setTakePicture(false)
    //         })
    //     }
    // }
    // capture()
    return (
            <View style={styles.container}>
                    <TouchableOpacity style={styles.toggleBtn} onPress={() => setType(type === CameraType.front ? CameraType.back : CameraType.front)}>
                        <Image
                            source={icons.cameraSwitch}
                            style={styles.toggleBtnImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Camera
                        ref={refCamera}
                        style={styles.camera}
                        type={type}
                        useCamera2Api={true}
                        ratio="1:1"
                    />
            </View>
    )
}
        
export default CameraCard