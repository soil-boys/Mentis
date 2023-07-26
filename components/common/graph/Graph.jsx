import { View, Text } from "react-native";
import { LineGraph } from "react-native-graph";
import { COLORS } from "../../../constants";

import { SelectionDot } from "./SelectionDot";

import styles from "./graph.style";

function Graph({ data }) {

    return(
        <View style={styles.container}>
            <LineGraph
                style={styles.graph}
                points={data}
                animated={true}
                color={COLORS.tertiary}
                selectionDotShadowColor={COLORS.blue}
                enablePanGesture={true}
                enableIndicator={true}
                SelectionDot={SelectionDot}
                gradientFillColors={[ COLORS.primary, COLORS.gray2 ]}
            />
        </View>
    )
}

export default Graph