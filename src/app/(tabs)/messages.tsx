import { Colors } from "@/constants/theme";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

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

    const { colors } = useTheme();
    const styles = createStyles(colors);


    function sendToChat(id: string) {
        router.push({
            pathname: "/chat",
            params: {id}
        })
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>
                    Conversas
                </Text>
            </View>

            <View style={styles.containerChat}>

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

        </View>
    );
}


const createStyles = (
    colors: ThemeColors
) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundSelected,
    },

    header: {
        backgroundColor: colors.primary,
        padding: 16
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
        color: colors.text
    },

    containerChat: {
        padding: 16
    },

    chatCard: {
        flexDirection: "row",
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: 16,
        marginBottom: 14,
        alignItems: "center",

        elevation: 5,        

        shadowColor: "#E69D3F",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },

    avatarText: {
        color: colors.text,
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
        color: colors.text  
    },

    service: {
        marginTop: 4,
        color: colors.primary,
        fontWeight: "600",
    },

    message: {
        flex: 1,
        color: colors.textSecondary,
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