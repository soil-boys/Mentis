import React, { useCallback } from "react";
import { runOnJS, useAnimatedReaction } from "react-native-reanimated";
import { runSpring, useValue, Circle } from '@shopify/react-native-skia'

function SelectionDot({ isActive, color, circleX, circleY }) {

    const circleRadius = useValue(0)

    const setIsActive = useCallback(active => {
        runSpring(circleRadius, active ? 5 : 0, {
            mass: 1,
            stiffness: 1000,
            damping: 50,
            velocity: 0
        })
    }, [circleRadius])

    useAnimatedReaction(() => isActive.value, active => runOnJS(setIsActive)(active), [isActive, setIsActive])

    return <Circle cx={circleX} cy={circleY} r={circleRadius} color={color} />

}

export default SelectionDot