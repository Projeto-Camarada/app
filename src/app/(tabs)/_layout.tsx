import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs 
            screenOptions={{ 
                headerShown: false, 
                tabBarActiveTintColor: "#2563EB",
                tabBarInactiveTintColor: "#999",
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
                name="opportunities" 
                options={{
                    title: "Oportunidades",
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