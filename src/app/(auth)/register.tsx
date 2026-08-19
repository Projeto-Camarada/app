import { useEffect, useState } from "react";
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
import { isValidEmail } from "@/validators/email";
import { formatPhone } from "@/validators/phone";
import Toast from "@/components/Toast";
import { formatCpfCnpj, isValidCpfCnpj } from "@/validators/cpfCnpj";
import { getProfessions } from "@/services/professionService";
import FormInput from "@/components/FormInput";



export default function RegisterScreen() {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    const [step, setStep] = useState(0);
    const [hidePassword, setHidePassword] = useState(true);

    const [professions, setProfessions] = useState<any[]>([]);

    const [form, setForm] = useState({
        name: "",
        // services: [],
        document: "",
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
            key: "services",
            title: "Com o que você trabalha?",
            placeholder: "Trabalho",
            keyboard: "default",
        },
        {
            key: "document",
            title: "Qual seu CPF/CNPJ?",
            placeholder: "Digite seu CPF/CNPJ",
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

    const current = steps[step];

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState<"success" | "error" | "info">("info");

    function showToast(
        message: string,
        type: "success" | "error" | "info" = "info"
    ) {
        setToastMessage(message);
        setToastType(type);
        setToastVisible(true);
    }

    function next() {
        const value = form[current.key as keyof typeof form];

        if (!value.trim() && current.key !== "email") {
            showToast(
                "Campo inválido",
                "error"
            );
            
            return
        };

        if (
            current.key === "email" &&
            value.trim() &&
            !isValidEmail(value)
        ) {
            showToast(
                "Email inválido",
                "error"
            );

            return;
        }

        if (current.key === "document") {
            isValidCpfCnpj(value);
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

            showToast(
                "Usuário criado com sucesso",
                "success"
            );

            router.replace("/(auth)/login");
        } catch (err) {
            console.log(err);
        }
    }

    const progress = ((step + 1) / steps.length) * 100;

    useEffect(() => {
        const handleGetProfessions = async () => {
            try {
                const data = await getProfessions();
                setProfessions(data)
            } catch (error) {
                console.log(error);
            }
        }

        handleGetProfessions();

    }, []);

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

            <FormInput
                field={current.key}
                value={form[current.key as keyof typeof form]}
                placeholder={current.placeholder}
                keyboardType={current.keyboard as any}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                onChange={(value) => {
                    setForm(prev => ({
                        ...prev,
                        [current.key]: value
                    }));
                }}
            />

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

            <Toast
                visible={toastVisible}
                message={toastMessage}
                type={toastType}
                onHide={() => setToastVisible(false)}
            />

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
        marginTop: 20,
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