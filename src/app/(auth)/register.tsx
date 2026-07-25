import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from "react-native";
import { router } from "expo-router";

export default function RegisterScreen() {
    const [step, setStep] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

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

        if (!value.trim()) return;
    
        if (current.key === "email" && !isValidEmail(value)) {
            Alert.alert("E-mail inválido", "Digite um e-mail válido.");
            return;
        }

        if (step < steps.length - 1) {
            setStep(step + 1);
            return;
        }

        register();
    }

    function back() {
        if (step === 0) {
            router.back();
            return;
        }

        setStep(step - 1);
    }

    async function register() {
        try {
            console.log(form);

            // await api.post("/auth/register", form);

            router.replace("/(auth)/login");
        } catch (err) {
            console.log(err);
        }
    }

    const progress = ((step + 1) / steps.length) * 100;

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : undefined}
        >
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

            <Text style={styles.title}>{current.title}</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    key={current.key}
                    style={styles.input}
                    placeholder={current.placeholder}
                    autoCapitalize={current.key == "email" ? "none" : "words"}
                    keyboardType={current.keyboard as any}
                    secureTextEntry={current.key === "password" && !showPassword}
                    value={
                        current.key === "phone"
                            ? formatPhone(form.phone)
                            : form[current.key as keyof typeof form]
                    }
                    onChangeText={(text) => {
                        let value = text;

                        if (current.key === "phone") {
                            value = text.replace(/\D/g, "").slice(0, 11);
                        }

                        setForm({
                            ...form,
                            [current.key]: value,
                        });
                    }}
                />

                {current.key === "password" && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeButton}
                    >
                        <Ionicons
                            name={showPassword ? "eye-off-outline" : "eye-outline"}
                            size={24}
                            color="#666"
                        />

                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity
                    style={[styles.button, styles.backButton]}
                    onPress={back}
                >
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.nextButton]}
                    onPress={next}
                >
                    <Text style={styles.nextText}>
                        {step == steps.length - 1 ? "Criar conta" : "Próximo"}
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: "center",
        paddingHorizontal: 24,
    },

    progressBackground: {
        width: "100%",
        height: 6,
        backgroundColor: "#DDD",
        borderRadius: 10,
        marginBottom: 15,
    },

    progress: {
        height: 6,
        borderRadius: 10,
        backgroundColor: "#ff6b00",
    },

    step: {
        color: "#777",
        fontSize: 15,
        marginBottom: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 40,
    },

    input: {
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 14,
        paddingHorizontal: 18,
        height: 58,
        flex: 1,
        fontSize: 18,
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
        backgroundColor: "#EEE",
    },

    nextButton: {
        backgroundColor: "#ff6b00",
    },

    backText: {
        fontWeight: "600",
        color: "#333",
        fontSize: 16,
    },

    nextText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },

    inputContainer: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
    },

    eyeButton: {
        padding: 8,
        position: "absolute",
        right: 15
    },
});