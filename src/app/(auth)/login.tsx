import EyeButton from "@/components/EyeButton";
import Logo from "@/components/Logo";
import { router } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const userData = {
    phone: "11991251903",
    password: "Thiago@123"
}

export default function Login() {

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

    async function login() {
        if (
            phone !== userData.phone ||
            password !== userData.password
        ) {
            Alert.alert("Telefone ou Senha Incorreto.");
            return;
        }

        await AsyncStorage.setItem("isLoggedIn", "true");

        router.replace("/home");
    } 

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Logo 
                    size = "medium"
                    showSubtitle = {false}
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
                            keyboardType={"phone-pad"}
                            value={formatPhone(phone)}
                            onChangeText={(text) => {
                                let value = text;
                                value = text.replace(/\D/g, "").slice(0, 11);
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
                            keyboardType={"default"}
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

                <Pressable style={styles.button} onPress={() => login()}>
                    <Text style={styles.textButton}>
                        Entrar
                    </Text>
                </Pressable>

            </View>
        </SafeAreaView>
    );
}

const PRIMARY = "#ff6b00";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },

    content: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingBottom: 136
    },

    title: {
        fontSize: 34,
        fontWeight: "700",
        textAlign: "center",
        marginVertical: 20,
    },

    wrapperInput: {
        gap: 16,
    },

    containerInput: {
        height: 58
    },

    passwordContainer: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
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

    inputFocused: {
        borderColor: PRIMARY,
        borderWidth: 2
    },

    primaryButton: {
        backgroundColor: PRIMARY,
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

    button: {
        backgroundColor: PRIMARY,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20,
    },

    textButton: {
        color: "#FFF",
        fontWeight: "700",
        fontSize: 18
    },

});