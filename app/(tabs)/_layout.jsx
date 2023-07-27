import moment from "moment";
import { Tabs } from "expo-router";
import TabBarIcon from "../../components/common/tab bar icon/TabBarIcon";
import getGreeting from "../../utils/getGreeting";
import { DateDisplay } from "../../components";

import { COLORS, icons, FONT, SIZES} from "../../constants";
import { useEffect, useState } from "react";

import styles from "../../components/common/tab bar icon/tabbaricon.style";
// import { View, Text, Pressable } from "react-native";

console.log(new Date(3))

function TabLayout() {

    const [greeting, setGreeting] = useState(getGreeting(moment().format('HH')))
    useEffect(() => {
        setInterval(() => {
            setGreeting(getGreeting(moment().format('HH')))
        })
    }, [])

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: COLORS.lightWhite,
                tabBarInactiveTintColor: COLORS.primary,
                tabBarActiveBackgroundColor: COLORS.tertiary,
                tabBarInactiveBackgroundColor: COLORS.gray4,
                tabBarLabelStyle: { fontFamily: FONT.medium },
                tabBarItemStyle: styles.navBtn,
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
                    headerRight: () => <DateDisplay />,
                    // headerBackground: () => <View style={{ flex: 1, backgroundColor: COLORS.gray4 }} />,
                    // headerTransparent: true,
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