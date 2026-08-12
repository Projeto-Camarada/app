import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { HapticTab } from "@/components/haptic-tab";


export default function TabLayout() {

    const colorScheme = useColorScheme() ?? "light";
    const colors = Colors[colorScheme];

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
                        <Ionicons name="chatbox" size={size} color={color} />
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