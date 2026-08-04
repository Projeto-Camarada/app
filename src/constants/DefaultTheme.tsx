import type { Theme } from '@react-navigation/core';
import {
    DefaultTheme as NavigationDefaultTheme
} from "@react-navigation/native";


export const DefaultTheme: Theme = {
    ...NavigationDefaultTheme,
    dark: false,
    colors: {
        primary: "#ff6b00",
        background: "#F2F2F2",
        card: "#F2F2F2",
        text: "#111827",
        border: "#ff6b0000",
        notification: "#ff6b00",
    },
};
