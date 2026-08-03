import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const chats = [
    {
        id: "1",
        name: "João Silva",
        service: "🏠 Construção de muro",
        lastMessage: "Tudo certo, posso começar hoje.",
        time: "14:32",
        unread: true,
    },
    {
        id: "2",
        name: "Maria Oliveira",
        service: "🚿 Assentar porcelanato",
        lastMessage: "Obrigada pelo orçamento!",
        time: "Ontem",
        unread: false,
    },
    {
        id: "3",
        name: "Carlos Souza",
        service: "⚡ Instalação elétrica",
        lastMessage: "Você: Perfeito, até amanhã.",
        time: "Seg",
        unread: false,
    },
];

export default function Messages() {

    function sendToChat(id: string) {
        router.push({
            pathname: "/chat",
            params: {id}
        })
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Conversas
            </Text>

            <FlatList
                data={chats}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable style={styles.chatCard} onPress={() => sendToChat(item.id)}>

                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>
                                {item.name[0]}
                            </Text>
                        </View>

                        <View style={styles.content}>

                            <View style={styles.row}>
                                <Text style={styles.name}>
                                    {item.name}
                                </Text>

                                <Text style={styles.time}>
                                    {item.time}
                                </Text>
                            </View>

                            <Text style={styles.service}>
                                {item.service}
                            </Text>

                            <View style={styles.row}>
                                <Text
                                    numberOfLines={1}
                                    style={styles.message}
                                >
                                    {item.lastMessage}
                                </Text>

                                {item.unread && (
                                    <View style={styles.badge} />
                                )}
                            </View>

                        </View>

                    </Pressable>
                )}
            />

        </View>
    );
}

const PRIMARY = "#FF6B00";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 16,
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 20,
    },

    chatCard: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderRadius: 16,
        padding: 16,
        marginBottom: 14,
        alignItems: "center",
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: PRIMARY,
        justifyContent: "center",
        alignItems: "center",
    },

    avatarText: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "700",
    },

    content: {
        flex: 1,
        marginLeft: 16,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    name: {
        fontSize: 18,
        fontWeight: "700",
    },

    service: {
        marginTop: 4,
        color: PRIMARY,
        fontWeight: "600",
    },

    message: {
        flex: 1,
        color: "#666",
        marginTop: 8,
        marginRight: 10,
    },

    time: {
        color: "#888",
        fontSize: 13,
    },

    badge: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#22C55E",
        marginTop: 8,
    },

});