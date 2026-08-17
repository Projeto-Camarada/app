/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';
import { ThemeColors } from '@/types/ThemeColors';

import { Platform } from 'react-native';

export const Colors: Record<"light" | "dark", ThemeColors> = {
    light: {
        primary: '#E69D3F',

        text: '#000000',
        textSecondary: '#6B7280',

        background: '#FFFFFF',
        backgroundElement: '#F8F8F8',
        backgroundSelected: '#F2F2F2',

        card: "#FFFFFF",
        border: "#ECECEC",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        premium: "#D4AF37",
        premiumDark: "#5E4B1F"
    },
    dark: {

        primary: '#E69D3F',

        text: '#FFFFFF',
        textSecondary: '#B0B4BA',

        background: '#000000',
        backgroundElement: '#1A1A1A',
        backgroundSelected: '#2A2A2A',

        card: "#111111",
        border: "#2F2F2F",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        premium: "#D4AF37",
        premiumDark: "#5E4B1F",
    },
};

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
    ios: {
        /** iOS `UIFontDescriptorSystemDesignDefault` */
        sans: 'system-ui',
        /** iOS `UIFontDescriptorSystemDesignSerif` */
        serif: 'ui-serif',
        /** iOS `UIFontDescriptorSystemDesignRounded` */
        rounded: 'ui-rounded',
        /** iOS `UIFontDescriptorSystemDesignMonospaced` */
        mono: 'ui-monospace',
    },
    default: {
        sans: 'normal',
        serif: 'serif',
        rounded: 'normal',
        mono: 'monospace',
    },
    web: {
        sans: 'var(--font-display)',
        serif: 'var(--font-serif)',
        rounded: 'var(--font-rounded)',
        mono: 'var(--font-mono)',
    },
});

export const Spacing = {
    half: 2,
    one: 4,
    two: 8,
    three: 16,
    four: 24,
    five: 32,
    six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
