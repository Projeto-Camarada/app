import { Colors } from "@/constants/theme";
import { ThemeColors } from "@/types/ThemeColors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { useColorScheme } from "react-native";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
    theme: Theme;
    colorScheme: "light" | "dark";
    colors: ThemeColors;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const systemScheme = useColorScheme() ?? "light";

    const [theme, setThemeState] = useState<Theme>("system");

    useEffect(() => {
        loadTheme();
    }, []);

    async function loadTheme() {
        const savedTheme = await AsyncStorage.getItem("theme");

        if (
            savedTheme === "light" ||
            savedTheme === "dark" ||
            savedTheme === "system"
        ) {
            setThemeState(savedTheme);
        }
    }

    async function setTheme(theme: Theme) {
        setThemeState(theme);

        await AsyncStorage.setItem("theme", theme);
    }

    const colorScheme =
        theme === "system"
            ? systemScheme
            : theme;

    const colors = Colors[colorScheme];

    return (
        <ThemeContext.Provider
            value={{
                theme,
                colorScheme,
                colors,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme deve ser usado dentro de ThemeProvider"
        );
    }

    return context;
}