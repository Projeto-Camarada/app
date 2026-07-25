import { router } from "expo-router";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.logo}>🤝</Text>

                <Text style={styles.title}>
                    Camarada
                </Text>

                <Text style={styles.subtitle}>
                    Encontre profissionais ou ofereça seus serviços.
                </Text>

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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },

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