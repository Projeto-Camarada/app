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
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

    useEffect(() => {
        checkLogin();
    }, [])

    async function checkLogin() {
        const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
            router.replace("/home");
        }
    }

    return (
        <View style={styles.content}>
            <Logo />

            <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => router.push("/(auth)/login")}
            >
                <Text style={styles.primaryText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => router.push("/(auth)/register")}
            >
                <Text style={styles.secondaryText}>Criar conta</Text>
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

const styles = StyleSheet.create({

    content: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
    },

    logo: {
        fontSize: 70,
        textAlign: "center",
        marginBottom: 20,
    },

    title: {
        fontSize: 34,
        fontWeight: "700",
        textAlign: "center",
    },

    subtitle: {
        textAlign: "center",
        color: "#666",
        marginTop: 10,
        marginBottom: 50,
        fontSize: 16,
    },

    primaryButton: {
        backgroundColor: "#ff6b00",
        height: 55,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

    primaryText: {
        color: "#FFF",
        fontWeight: "700",
        fontSize: 17,
    },

    secondaryButton: {
        borderWidth: 1,
        borderColor: "#ff6b00",
        height: 55,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

    secondaryText: {
        color: "#ff6b00",
        fontWeight: "700",
        fontSize: 17,
    },

    googleButton: {
        height: 55,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
    },

    googleText: {
        fontSize: 16,
        fontWeight: "600",
    },
});