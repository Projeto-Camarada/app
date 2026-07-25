import { Stack } from 'expo-router';
import { ThemeProvider, DarkTheme } from "@react-navigation/native"

import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { DefaultTheme } from '@/constants/DefaultTheme';

// SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
    return (
        <ThemeProvider value={DefaultTheme}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index"/>
                <Stack.Screen name="(auth)"/>
                <Stack.Screen name="(tabs)"/>
            </Stack>
        </ThemeProvider>
    );
}

// https://chatgpt.com/c/6a603ce4-ab44-83e9-a376-0601ce031dd3