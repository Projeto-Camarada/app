import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/haptic-tab";
import NotificationBadge from "@/components/NotificationBadge";
import { useTheme } from "@/contexts/themeContext";


export default function TabLayout() {

    const { colors } = useTheme();

    return (
        <Tabs 
            screenOptions={{ 
                tabBarButton: HapticTab,
                headerShown: false, 
                tabBarStyle: { 
                    backgroundColor: colors.primary,
                },
                tabBarActiveTintColor: colors.background,
                tabBarInactiveTintColor: colors.text,
                tabBarHideOnKeyboard: true
            }}
        >
            <Tabs.Screen
                name="home" 
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    )
                }}
            />
            
            <Tabs.Screen 
                name="messages"
                options={{
                    title: "Mensagens",
                    tabBarIcon: ({ color, size }) => (
                        <>
                            <Ionicons name="chatbox" size={size} color={color} />
                            <NotificationBadge quantity={1} />
                        </>
                    )
                }}
            />

            <Tabs.Screen 
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    )
                }}    
            />
        </Tabs>
    );
}
