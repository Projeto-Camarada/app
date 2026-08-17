import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from "react-native";
import { useState } from "react";
import { ThemeColors } from "@/types/ThemeColors";
import { useTheme } from "@/contexts/themeContext";

type Theme = "light" | "dark" | "system";

export default function Appearance() {

    const { colors, theme, setTheme } = useTheme();    

    const styles = createStyles(colors);

    const themes = [
        {
            id: "light" as Theme,
            title: "Claro",
            description: "Usar o tema claro",
            icon: "sunny-outline" as const,
        },
        {
            id: "dark" as Theme,
            title: "Escuro",
            description: "Usar o tema escuro",
            icon: "moon-outline" as const,
        },
        {
            id: "system" as Theme,
            title: "Automático",
            description: "Seguir o tema do dispositivo",
            icon: "phone-portrait-outline" as const,
        },
    ];

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.header}>

                <Pressable
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Ionicons
                        name="arrow-back"
                        size={28}
                        color={colors.text}
                    />
                </Pressable>

                <Text style={styles.headerTitle}>
                    Aparência
                </Text>

            </View>

            <View style={styles.section}>

                <Text style={styles.sectionTitle}>
                    Tema
                </Text>

                <View style={styles.options}>

                    {themes.map((it) => {

                        const selected = theme === it.id;

                        return (
                            <Pressable
                                key={it.id}
                                style={[
                                    styles.option,
                                    selected && styles.optionSelected,
                                ]}
                                onPress={() => setTheme(it.id)}
                            >

                                <View
                                    style={[
                                        styles.iconContainer,
                                        selected && styles.iconContainerSelected,
                                    ]}
                                >
                                    <Ionicons
                                        name={it.icon}
                                        size={26}
                                        color={
                                            selected
                                                ? colors.background
                                                : colors.primary
                                        }
                                    />
                                </View>

                                <View style={styles.optionContent}>

                                    <Text style={styles.optionTitle}>
                                        {it.title}
                                    </Text>

                                    <Text style={styles.optionDescription}>
                                        {it.description}
                                    </Text>

                                </View>

                                <View
                                    style={[
                                        styles.radio,
                                        selected && styles.radioSelected,
                                    ]}
                                >
                                    {selected && (
                                        <View style={styles.radioInner} />
                                    )}
                                </View>

                            </Pressable>
                        );
                    })}

                </View>

            </View>

        </ScrollView>
    );
}

const createStyles = (
    colors: ThemeColors
) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundSelected,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        height: 80,
        backgroundColor: colors.primary,
        padding: 12,
    },

    backButton: {
        marginRight: 14,
        marginLeft: 4,
    },

    headerTitle: {
        color: colors.text,
        fontSize: 28,
        fontWeight: "600",
    },

    section: {
        marginTop: 24,
        marginHorizontal: 16,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: colors.textSecondary,
        marginBottom: 10,
        marginLeft: 4,
    },

    options: {
        backgroundColor: colors.card,
        borderRadius: 16,
        paddingHorizontal: 16,
    },

    option: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.backgroundSelected,
    },

    optionSelected: {
        // pode deixar sem fundo por enquanto
    },

    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backgroundSelected,
        marginRight: 14,
    },

    iconContainerSelected: {
        backgroundColor: colors.primary,
    },

    optionContent: {
        flex: 1,
    },

    optionTitle: {
        color: colors.text,
        fontSize: 17,
        fontWeight: "700",
    },

    optionDescription: {
        color: colors.textSecondary,
        fontSize: 14,
        marginTop: 4,
    },

    radio: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: colors.textSecondary,
        justifyContent: "center",
        alignItems: "center",
    },

    radioSelected: {
        borderColor: colors.primary,
    },

    radioInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.primary,
    },

});