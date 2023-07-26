import moment from "moment";
import { Tabs } from "expo-router";
import TabBarIcon from "../../components/common/tab bar icon/TabBarIcon";

import getGreeting from "../../utils/getGreeting";

import { COLORS, icons, FONT, SIZES} from "../../constants";
import { useEffect, useState } from "react";

import styles from "../../components/common/tab bar icon/tabbaricon.style";
import { Pressable } from "react-native";

function TabLayout() {

    const [greeting, setGreeting] = useState(getGreeting(moment().format('HH')))
    useEffect(() => {
        setGreeting(getGreeting(moment().format('HH')))
    }, [])

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: COLORS.lightWhite,
                tabBarInactiveTintColor: COLORS.primary,
                tabBarActiveBackgroundColor: COLORS.tertiary,
                tabBarInactiveBackgroundColor: COLORS.lightWhite,
                tabBarLabelStyle: { fontFamily: FONT.medium },
                // tabBarShowLabel: false,
                tabBarItemStyle: styles.navBtn,
                // tabBarButton: () => (
                    //     <Pressable
                    //         style={styles.navBtn}
                    //         android_ripple={{ color: COLORS.secondary, radius: .5 }}
                    //     />
                    // ),
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon icon={icons.home} color={color} />,
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerTitleStyle: { fontFamily: FONT.medium, color: COLORS.secondary },
                    headerBackVisible: false,
                    headerTitle: `Good ${greeting}`,
                    title: 'Home'
                }}
            />
            <Tabs.Screen
                name="analytics"
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon icon={icons.analytics} color={color} />,
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerTitleStyle: { fontFamily: FONT.medium, color: COLORS.secondary },
                    headerBackVisible: false,
                    headerTitle: `Analytics`,
                    title: 'Analytics'
                }}
            />
        </Tabs>
    )
}

export default TabLayout