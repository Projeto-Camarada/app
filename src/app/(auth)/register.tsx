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
import { saveProvider } from "@/services/providerService";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

type service = {
    id: number,
    name: string, 
}

export default function RegisterScreen() {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    const [step, setStep] = useState(0);
    const [hidePassword, setHidePassword] = useState(true);

    const [professions, setProfessions] = useState<any[]>([]);
    const [filteredProfessions, setFilteredProfessions] = useState<any[]>([]);
    const [professionSearch, setProfessionSearch] = useState("");

    const [registering, setRegistering] = useState(false);

    const [form, setForm] = useState({
        name: "",
        services: [] as service[],
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

        if (current.key === "services") {

            if (form.services.length === 0) {
                showToast(
                    "Selecione pelo menos uma profissão",
                    "error"
                );

                return;
            }

        } else {

            const value = form[
                current.key as Exclude<keyof typeof form, "services">
            ];

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
        if (registering) return;
        setRegistering(true);

        try {
            const {services, document, ...dataUser} = form;

            const data = await register(dataUser);

            await AsyncStorage.setItem("token", data.token)
            
            const dataProvider = { cpfCnpj: form.document, serviceIds: form.services.map(it => it.id)}; 
            
            const provider = await saveProvider(dataProvider);

            if (data && provider) {
                showToast(
                    "Usuário criado com sucesso",
                    "success"
                );                
                
                setTimeout(() => {
                    router.replace("/home");
                }, 3000)
            } else {
                showToast(
                    "Usuário não foi criado",
                    "error"
                );
            }

        } catch (err) {
            console.log(err);
        }
    }

    const progress = ((step + 1) / steps.length) * 100;

    const availableProfessions = professions.filter(
        profession => 
            !form.services.includes(profession)        
    );

    function handleProfessionSearch(value: string) {
        setProfessionSearch(value);

        const filtered = availableProfessions.filter(profession =>
            profession.name
                .toLowerCase()
                .includes(value.toLowerCase())
        );

        setFilteredProfessions(filtered);
    }

    useEffect(() => {

        if (professions.length == 0) {
            const handleGetProfessions = async () => {
                try {
                    const data = await getProfessions();
                    setProfessions(data);
                    setFilteredProfessions(data);
                } catch (error) {
                    console.log(error);
                }
            }
    
            handleGetProfessions();
        }

    }, [step]);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >

            <Pressable style={styles.backArrowButton} onPress={() => router.replace("/")}>
                <Ionicons name="arrow-back" size={24} style={styles.backArrow} />
            </Pressable>

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
                value={
                    current.key === "services" 
                        ? professionSearch
                        : String(form[current.key as keyof typeof form])
                }
                placeholder={current.placeholder}
                keyboardType={current.keyboard as any}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                onChange={(value) => {

                    if (current.key === "services") {
                        handleProfessionSearch(value);
                        return;
                    }

                    setForm(prev => ({
                        ...prev,
                        [current.key]: value
                    }));
                }}
                suggestions={
                    current.key === "services"
                    ? filteredProfessions
                    : []
                }
                onSuggestionPress={(profession) => {
                    if (form.services.length >= 3) {
                        showToast(
                            "Limite de Servicos selecionados",
                            "info"
                        )
                    } else {
                        setForm(prev => ({
                            ...prev,
                            services: [
                                ...prev.services,
                                profession
                            ]
                        }));
                    }


                    setProfessionSearch("");
                }}
                optionsSelected={
                    current.key === "services" ?
                    form.services : []
                }
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
                    disabled={registering}
                >
                    <Text style={styles.nextText}>
                        {
                            step === steps.length - 1
                                ? "Criar conta"
                                : current.key === "email"
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

    backArrowButton: {
        position: "absolute",
        top: 20,
        left: 20
    },

    backArrow: {
        color: colors.text
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