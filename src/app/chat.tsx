import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";


const colorScheme = useColorScheme() ?? "light";
const colors = Colors[colorScheme];




export default function Chat() {

    const { id } = useLocalSearchParams<{ id: string }>();
    const [idMessage, setIdMessage] = useState(2);
    const flatListRef = useRef<FlatList>(null);

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

        setMessages(prev => [
            ...prev,
            {
                id: idMessage.toString(),
                text: message,
                mine: true 
            }
        ]);

        setIdMessage(prev => prev++);

        setMessage("");
    }

    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
            
                <Pressable style={styles.backButton} onPress={() => goBack()}>
                    <Ionicons name="arrow-back" size={28} color={"#fff"}/>
                </Pressable>
            
                <Pressable style={styles.profileButton}>
                    <Image 
                        source={require("@/assets/images/job.png")}
                        style={styles.profileImage}
                        resizeMode="cover"
                    />
                
                    <Text style={styles.titleProfile}>Pessoa</Text>
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
                            <Text>{item.text}</Text>
                        </View>
                    )}
                />

            </View>

            <View style={styles.footer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite uma mensagem..."
                    value={message}
                    onChangeText={(it) => setMessage(it)}
                    onSubmitEditing={() => sendMessage(message)}
                    returnKeyType="send"
                />
                
                <Pressable 
                    style={styles.sendButton} 
                    onPress={() => sendMessage(message)}>
                    <Ionicons name="send"  size={22} color={"#ffff"}/>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        height: 80,
        backgroundColor: colors.primary,
        flexDirection: "row",
        alignItems: "center",
        padding: 12
    },

    backButton: {
        marginRight: 20,
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

    footer: {
        flexDirection: "row",
        padding: 12,
        backgroundColor: "#fff",
    },

    input: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        borderRadius: 25,
        paddingHorizontal: 18,
    },

    sendButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#FF6B00",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    }
})