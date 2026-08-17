import { Stack } from 'expo-router';
import {ThemeProvider as NavigationProvider, DarkTheme } from "@react-navigation/native"

import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, useColorScheme } from 'react-native';
import { DefaultTheme } from '@/constants/DefaultTheme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { useEffect } from 'react';
import * as NavigationBar from "expo-navigation-bar";
import { ThemeProvider, useTheme } from '@/contexts/themeContext';
import { ThemeColors } from '@/types/ThemeColors';

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    return (
        <ThemeProvider>
            <RootContent />
        </ThemeProvider>
    )
};

function RootContent() { 
    const { colors, colorScheme } = useTheme();

    const styles = createStyles(colors);

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync(colors.background);
        NavigationBar.setButtonStyleAsync(
            colorScheme === "dark" ? "light" : "dark"
        );
    }, [colors, colorScheme]);

    return (
        <NavigationProvider value={DefaultTheme}>
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

        </NavigationProvider>
    );
}

// https://chatgpt.com/c/6a603ce4-ab44-83e9-a376-0601ce031dd3

const createStyles = (colors: ThemeColors) =>  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
})