import { Colors } from "@/constants/theme";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

type SettingsOptionProps = {
    title: string;
    titleColor?: string;
    description: string;
    icon: keyof typeof Ionicons.glyphMap;
    color?: string;
    onPress?: () => void;
};

export default function SettingsOption({
    title, 
    titleColor,
    description, 
    icon, 
    color, 
    onPress
}: SettingsOptionProps) {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <Pressable style={styles.option} onPress={onPress}>

            <View style={styles.iconContainer}>
                <Ionicons
                    name={icon}
                    size={28}
                    color={color ? color : colors.primary}
                />
            </View>

            <View style={styles.optionContent}>
                <Text style={[styles.optionTitle, titleColor ? { color: titleColor } : null]}>
                    {title}
                </Text>

                <Text style={styles.optionDescription}>
                    {description}
                </Text>
            </View>

            <Ionicons
                name="chevron-forward"
                size={28}
                color={colors.textSecondary}
            />

        </Pressable>
    )
}

const createStyles = (
    colors: ThemeColors
) => StyleSheet.create({

    option: {
        backgroundColor: colors.card,
        minHeight: 76,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 16,

        borderRadius: 14,

        marginBottom: 8,
    },

    iconContainer: {
        width: 42,
        height: 42,

        borderRadius: 12,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: colors.backgroundSelected,
    },

    optionContent: {
        flex: 1,
        marginLeft: 14,
    },

    optionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.text,
    },

    optionDescription: {
        marginTop: 3,
        fontSize: 14,
        color: colors.textSecondary,
    },


})