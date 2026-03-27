import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

const TabsLayout = () => {
    const { colors } = useTheme()
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor : colors.text,
            tabBarInactiveTintColor : colors.textMuted,
            tabBarStyle: {
                paddingBottom : 30,
                paddingTop: 20,
                backgroundColor : colors.bg
            },
            headerShown: false
        }}>
            <Tabs.Screen name='index' options={
                { title: "Perfil",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='person' color={color} size={size}/>
                  ) 
            }} />
           
             <Tabs.Screen name='user' options={
                { title: "home",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='home' color={color} size={size}/>
                  ) 
            }} />
        </Tabs>
    )
}

export default TabsLayout