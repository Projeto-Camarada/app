import { Colors } from "@/constants/theme";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";

export default function Chat() {
    
    const { colors } = useTheme();
    const styles = createStyles(colors);
    
    const { id } = useLocalSearchParams<{ id: string }>();
    const [idMessage, setIdMessage] = useState(2);
    const flatListRef = useRef<FlatList>(null);

    const [keyboardVisible, setKeyboardVisible] = useState(false);


    const [messages, setMessages] = useState([
        {
            id: "1",
            text: "Olá! Você consegue começar hoje?",
            mine: false,
        },
        {
            id: "2",
            text: "Sim, consigo.",
            mine: true
        }
    ]);

    const [message, setMessage] = useState("");

    console.log(id);

    function goBack() {
        router.back();
    }

    function sendMessage(message: string) {

        if (!message.trim()) return;

        const id = idMessage + 1;

        setMessages(prev => [
            ...prev,
            {
                id: id.toString(),
                text: message,
                mine: true 
            }
        ]);

        setIdMessage(id);

        setMessage("");
    }

    useEffect(() => {
        const showSubscription = Keyboard.addListener(
            "keyboardDidShow",
            () => setKeyboardVisible(true)
        );

        const hideSubscription = Keyboard.addListener(
            "keyboardDidHide",
            () => setKeyboardVisible(false)
        );

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={keyboardVisible ? 30 : 0}
        >

            <View style={styles.header}>
                <Pressable
                    style={styles.backButton}
                    onPress={goBack}
                >
                    <Ionicons
                        name="arrow-back"
                        size={28}
                        color={colors.text}
                    />
                </Pressable>

                <Pressable style={styles.profileButton}>
                    <Image
                        source={require("@/assets/images/job.png")}
                        style={styles.profileImage}
                        resizeMode="cover"
                    />

                    <Text style={styles.titleProfile}>
                        Pessoa
                    </Text>
                </Pressable>
            </View>

            <View style={styles.containerChat}>
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    renderItem={({ item }) => (
                        <View
                            style={[
                                styles.message,
                                item.mine
                                    ? styles.myMessage
                                    : styles.otherMessage,
                            ]}
                        >
                            <Text 
                                style={item.mine
                                    ? styles.myText
                                    : styles.otherText
                                }
                            >
                                {item.text}
                            </Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma mensagem..."
                    placeholderTextColor={colors.textSecondary}
                    value={message}
                    onChangeText={setMessage}
                    onSubmitEditing={() => sendMessage(message)}
                    returnKeyType="send"
                />

                <Pressable
                    style={styles.sendButton}
                    onPress={() => sendMessage(message)}
                >
                    <Ionicons
                        name="send"
                        size={22}
                        color="#fff"
                    />
                </Pressable>
            </View>

        </KeyboardAvoidingView>
    );
};


const createStyles = (
    colors: ThemeColors
) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundSelected
    },

    header: {
        height: 80,
        backgroundColor: colors.primary,
        flexDirection: "row",
        alignItems: "center",
        padding: 12
    },

    backButton: {
        marginRight: 14,
        marginLeft: 4,
    },

    profileButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14
    },

    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundPosition: "center"
    },

    titleProfile: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.text
    },

    containerChat: {
        padding: 8,
        flex: 1
    },

    message: {
        maxWidth: "75%",
        padding: 14,
        borderRadius: 18,
        marginVertical: 6,
    },

    myMessage: {
        backgroundColor: colors.primary,
        alignSelf: "flex-end",

    },

    otherMessage: {
        backgroundColor: "#fff",
        alignSelf: "flex-start"
    },

    myText: {
        color: "#fff",
        fontWeight: 600
    },

    otherText: {
        color: "#000",
        fontWeight: 600
    },

    footer: {
        flexDirection: "row",
        padding: 12,
        backgroundColor: colors.backgroundSelected,
    },

    input: {
        flex: 1,
        backgroundColor: colors.background,
        color: colors.text,
        borderRadius: 25,
        paddingHorizontal: 18,
    },

    sendButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    }
})