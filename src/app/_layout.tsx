import { Stack } from 'expo-router';
import { ThemeProvider, DarkTheme, DefaultTheme } from "@react-navigation/native"
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

// SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index"/>
                <Stack.Screen name="(auth)"/>
                <Stack.Screen name="(tabs)"/>
            </Stack>
        </ThemeProvider>
    );
}
