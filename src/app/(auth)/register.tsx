import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Pressable,
} from "react-native";
import { router } from "expo-router";
import EyeButton from "@/components/EyeButton";
import { register } from "@/services/authService";
import Logo from "@/components/Logo";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";

export default function RegisterScreen() {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    const [step, setStep] = useState(0);
    const [hidePassword, setHidePassword] = useState(true);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const steps = [
        {
            key: "name",
            title: "Como você se chama?",
            placeholder: "Digite seu nome",
            keyboard: "default",
        },
        {
            key: "email",
            title: "Qual é seu e-mail?",
            placeholder: "Digite seu e-mail",
            keyboard: "email-address",
        },
        {
            key: "phone",
            title: "Qual é seu telefone?",
            placeholder: "(11) 99999-9999",
            keyboard: "phone-pad",
        },
        {
            key: "password",
            title: "Crie uma senha",
            placeholder: "********",
            keyboard: "default",
            secure: true,
        },
    ];

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

    function isValidEmail(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const current = steps[step];

    function next() {
        const value = form[current.key as keyof typeof form];

        if (!value.trim() && current.key !== "email") return;

        if (
            current.key === "email" &&
            value.trim() &&
            !isValidEmail(value)
        ) {
            Alert.alert(
                "E-mail inválido",
                "Digite um e-mail válido."
            );

            return;
        }

        if (step < steps.length - 1) {
            setStep(step + 1);
            return;
        }

        handleSignIn();
    }

    function back() {
        if (step === 0) {
            router.back();
            return;
        }

        setStep(step - 1);
    }

    async function handleSignIn() {
        try {
            await register(form);

            Alert.alert("Usuário criado com sucesso");

            router.replace("/(auth)/login");
        } catch (err) {
            console.log(err);
        }
    }

    const progress = ((step + 1) / steps.length) * 100;

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >

            <Logo
                size="medium"
                showSubtitle={false}
            />

            <View style={styles.progressBackground}>
                <View
                    style={[
                        styles.progress,
                        {
                            width: `${progress}%`,
                        },
                    ]}
                />
            </View>

            <Text style={styles.step}>
                {step + 1} de {steps.length}
            </Text>

            <Text style={styles.title}>
                {current.title}
            </Text>

            <View style={styles.inputContainer}>

                <TextInput
                    key={current.key}
                    style={styles.input}
                    placeholder={current.placeholder}
                    placeholderTextColor={colors.text}
                    autoCapitalize={
                        current.key === "email"
                            ? "none"
                            : "words"
                    }
                    keyboardType={current.keyboard as any}
                    secureTextEntry={
                        current.key === "password" &&
                        hidePassword
                    }
                    value={
                        current.key === "phone"
                            ? formatPhone(form.phone)
                            : form[current.key as keyof typeof form]
                    }
                    onChangeText={(text) => {

                        let value = text;

                        if (current.key === "phone") {
                            value = text
                                .replace(/\D/g, "")
                                .slice(0, 11);
                        }

                        setForm({
                            ...form,
                            [current.key]: value,
                        });
                    }}
                />

                {current.key === "password" && (
                    <EyeButton
                        text={hidePassword}
                        showText={setHidePassword}
                    />
                )}

            </View>

            <View style={styles.buttons}>

                <Pressable
                    style={[
                        styles.button,
                        styles.backButton,
                    ]}
                    onPress={back}
                >
                    <Text style={styles.backText}>
                        Voltar
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.button,
                        styles.nextButton,
                    ]}
                    onPress={next}
                >
                    <Text style={styles.nextText}>
                        {
                            step === steps.length - 1
                                ? "Criar conta"
                                : step === 1
                                    ? "Pular"
                                    : "Próximo"
                        }
                    </Text>
                </Pressable>

            </View>

        </KeyboardAvoidingView>
    );
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundSelected,
        justifyContent: "center",
        paddingHorizontal: 24,
    },

    progressBackground: {
        width: "100%",
        height: 6,
        backgroundColor: colors.border,
        borderRadius: 10,
        marginBottom: 15,
    },

    progress: {
        height: 6,
        borderRadius: 10,
        backgroundColor: colors.primary,
    },

    step: {
        color: colors.textSecondary,
        fontSize: 15,
        marginBottom: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 40,
        color: colors.text,
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

    inputContainer: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
    },

    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 45,
    },

    button: {
        width: "47%",
        height: 55,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },

    backButton: {
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
    },

    nextButton: {
        backgroundColor: colors.primary,
    },

    backText: {
        fontWeight: "600",
        color: colors.text,
        fontSize: 16,
    },

    nextText: {
        color: colors.background,
        fontWeight: "bold",
        fontSize: 16,
    },
});