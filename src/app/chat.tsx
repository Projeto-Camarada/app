import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const messages = [
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
]


export default function Chat() {

    const { id } = useLocalSearchParams<{ id: string }>();

    console.log(id);

    function goBack() {
        router.back();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => goBack()}>
                    <Ionicons name="arrow-back" size={24} color={"#fff"}/>
                </Pressable>
                <Image />
                <Text>Pessoa</Text>
            </View>
            <FlatList 
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

            <View style={styles.footer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite uma mensagem..."
                />
                
                <Pressable style={styles.sendButton}>
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
        backgroundColor: "#ff6b00",
        flexDirection: "row",
        alignItems: "center",
        padding: 12
    },

    message: {
        maxWidth: "75%",
        padding: 14,
        borderRadius: 18,
        marginVertical: 6,
    },

    myMessage: {
        backgroundColor: "#ff6b00",
        alignSelf: "flex-end"
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