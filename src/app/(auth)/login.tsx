import EyeButton from "@/components/EyeButton";
import Logo from "@/components/Logo";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";
import { router } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "@/services/authService";

export default function Login() {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const [focusedInput, setFocusedInput] = useState("");

    function formatPhone(value: string) {
        const numbers = value.replace(/\D/g, "").slice(0, 11);

        if (numbers.length <= 2) {
            return numbers;
        }

        if (numbers.length <= 7) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        }

        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    }

    async function handleLogin() {
        try {
            const data = await login(phone, password);

            await AsyncStorage.setItem("token", data.token);

            router.replace("/home");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Logo
                    size="medium"
                    showSubtitle={false}
                />

                <Text style={styles.title}>
                    Login
                </Text>

                <View style={styles.wrapperInput}>

                    <View style={styles.containerInput}>
                        <TextInput
                            style={[
                                styles.input,
                                focusedInput === "phone" && styles.inputFocused,
                            ]}
                            placeholder="Telefone"
                            placeholderTextColor={colors.text}
                            keyboardType="phone-pad"
                            value={formatPhone(phone)}
                            onChangeText={(text) => {
                                const value = text
                                    .replace(/\D/g, "")
                                    .slice(0, 11);

                                setPhone(value);
                            }}
                            onFocus={() => setFocusedInput("phone")}
                            onBlur={() => setFocusedInput("")}
                        />
                    </View>

                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={[
                                styles.input,
                                focusedInput === "password" && styles.inputFocused,
                            ]}
                            secureTextEntry={hidePassword}
                            placeholder="Senha"
                            placeholderTextColor={colors.text}
                            keyboardType="default"
                            value={password}
                            onChangeText={(it) => setPassword(it)}
                            onFocus={() => setFocusedInput("password")}
                            onBlur={() => setFocusedInput("")}
                        />

                        <EyeButton
                            showText={setHidePassword}
                            text={hidePassword}
                        />
                    </View>

                </View>

                <Pressable
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.textButton}>
                        Entrar
                    </Text>
                </Pressable>

            </View>
        </SafeAreaView>
    );
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundSelected,
    },

    content: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingBottom: 136,
    },

    title: {
        fontSize: 34,
        fontWeight: "700",
        textAlign: "center",
        marginVertical: 20,
        color: colors.text,
    },

    wrapperInput: {
        gap: 16,
    },

    containerInput: {
        height: 58,
    },

    passwordContainer: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
    },

    input: {
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.card,
        color: colors.text,
        borderRadius: 14,
        paddingHorizontal: 18,
        height: 58,
        flex: 1,
        fontSize: 18,
    },

    inputFocused: {
        borderColor: colors.primary,
        borderWidth: 2,
    },

    button: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20,
    },

    textButton: {
        color: colors.background,
        fontWeight: "700",
        fontSize: 18,
    },
});