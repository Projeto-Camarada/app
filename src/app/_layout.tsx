import { Stack } from 'expo-router';
import { ThemeProvider, DarkTheme } from "@react-navigation/native"

import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, useColorScheme } from 'react-native';
import { DefaultTheme } from '@/constants/DefaultTheme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { useEffect } from 'react';
import * as NavigationBar from "expo-navigation-bar";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme() ?? "light";
    const colors = Colors[colorScheme];

    const styles = createStyles(colors);

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#1e3a80");
        NavigationBar.setButtonStyleAsync("light");
        NavigationBar.setBehaviorAsync('overlay-swipe');
    }, [])

    return (
            <ThemeProvider value={DefaultTheme}>
                <SafeAreaView 
                    style={styles.container}
                    edges={["top", "bottom"]}
                >

                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="index"/>
                        <Stack.Screen name="(auth)"/>
                        <Stack.Screen name="(tabs)"/>
                    </Stack>

                </SafeAreaView>
            </ThemeProvider>
    );
}

// https://chatgpt.com/c/6a603ce4-ab44-83e9-a376-0601ce031dd3

const createStyles = (colors: typeof Colors["dark" | "light"]) =>  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
})