import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabsLayout() {

    const colorScheme = useColorScheme() ?? "light";
    const colors = Colors[colorScheme];
    

    return (
        <Tabs 
            screenOptions={{ 
                headerShown: false, 
                tabBarStyle: { 
                    height: 70,
                    backgroundColor: colors.background 
                },
                tabBarActiveTintColor: colors.text,
                tabBarInactiveTintColor: colors.primary,
                tabBarItemStyle: {
                    justifyContent: "center",
                    alignItems: "center"
                }
            }}
        >
            <Tabs.Screen
                name="home" 
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color, size }) => {
                        <Ionicons name="home" size={size} color={color} />
                    }
                }}
            />
            
            <Tabs.Screen 
                name="messages"
                options={{
                    title: "Mensagens",
                    tabBarIcon: ({ color, size }) => {
                        <Ionicons name="chatbox" size={size} color={color} />
                    }
                }}
            />

            <Tabs.Screen name="service" />
            <Tabs.Screen name="earnings" />
            
            <Tabs.Screen 
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => {
                        <Ionicons name="person" size={size} color={color} />
                    }
                }}    
            />
        </Tabs>
    );
}