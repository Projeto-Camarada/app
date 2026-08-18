import Logo from "@/components/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";

export default function Index() {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    useEffect(() => {
        checkLogin();
    }, []);

    async function checkLogin() {
        const isLoggedIn = await AsyncStorage.getItem("token");

        if (isLoggedIn === "true") {
            router.replace("/home");
        }
    }

    return (
        <View style={styles.content}>

            <Logo />

            <TouchableOpacity
                style={styles.primaryButton}
                onPress={() =>
                    router.push("/(auth)/login")
                }
            >
                <Text style={styles.primaryText}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() =>
                    router.push("/(auth)/register")
                }
            >
                <Text style={styles.secondaryText}>
                    Criar conta
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.googleButton}
                onPress={() => {
                    // Login Google futuramente
                }}
            >
                <Text style={styles.googleText}>
                    Continuar com Google
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({

    content: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        backgroundColor: colors.backgroundSelected,
    },

    primaryButton: {
        backgroundColor: colors.primary,
        height: 55,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

    primaryText: {
        color: colors.background,
        fontWeight: "700",
        fontSize: 17,
    },

    secondaryButton: {
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: colors.card,
        height: 55,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

    secondaryText: {
        color: colors.primary,
        fontWeight: "700",
        fontSize: 17,
    },

    googleButton: {
        height: 55,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
    },

    googleText: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.text,
    },
});