import { Colors } from "@/constants/theme";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from "react-native";

const notifications = [
    {
        id: "1",
        type: "opportunity",
        title: "Nova oportunidade perto de você",
        message: "Construção de muro a 2,1 km da sua localização.",
        time: "Há 10 min",
        read: false,
        icon: "briefcase",
    },
    {
        id: "2",
        type: "message",
        title: "Nova mensagem",
        message: "João Silva enviou uma mensagem para você.",
        time: "Há 30 min",
        read: false,
        icon: "chatbox",
    },
    {
        id: "3",
        type: "rating",
        title: "Você recebeu uma avaliação",
        message: "Maria Oliveira avaliou seu serviço com 5 estrelas.",
        time: "Ontem",
        read: true,
        icon: "star",
    },
    {
        id: "4",
        type: "opportunity",
        title: "Nova oportunidade",
        message: "Instalação elétrica disponível a 4 km.",
        time: "Ontem",
        read: true,
        icon: "flash",
    },
];

export default function Notifications() {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    function openNotification(item: typeof notifications[number]) {

        // Futuramente:
        // marcar como lida
        // navegar para o conteúdo relacionado

        if (item.type === "message") {
            router.push("/messages");
        }

        if (item.type === "opportunity") {
            // router.push("/opportunities");
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <Pressable
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Ionicons
                        name="arrow-back"
                        size={28}
                        color={colors.text}
                    />
                </Pressable>

                <Text style={styles.headerTitle}>
                    Notificações
                </Text>

                <View style={styles.headerSpace} />

            </View>

            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Ionicons
                            name="notifications-off-outline"
                            size={60}
                            color={colors.textSecondary}
                        />

                        <Text style={styles.emptyTitle}>
                            Nenhuma notificação
                        </Text>

                        <Text style={styles.emptyText}>
                            Quando houver novidades, elas aparecerão aqui.
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <Pressable
                        style={[
                            styles.notification,
                            !item.read && styles.unread,
                        ]}
                        onPress={() => openNotification(item)}
                    >

                        <View style={styles.iconContainer}>
                            <Ionicons
                                name={item.icon as any}
                                size={24}
                                color={colors.background}
                            />
                        </View>

                        <View style={styles.notificationContent}>

                            <View style={styles.titleRow}>

                                <Text
                                    style={[
                                        styles.notificationTitle,
                                        !item.read && styles.unreadTitle,
                                    ]}
                                >
                                    {item.title}
                                </Text>

                                {!item.read && (
                                    <View style={styles.unreadDot} />
                                )}

                            </View>

                            <Text style={styles.message}>
                                {item.message}
                            </Text>

                            <Text style={styles.time}>
                                {item.time}
                            </Text>

                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color={colors.textSecondary}
                        />

                    </Pressable>
                )}
            />

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
        height: 75,
        backgroundColor: colors.primary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    backButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    headerTitle: {
        color: colors.text,
        fontSize: 22,
        fontWeight: "700",
    },

    headerSpace: {
        width: 40,
    },

    list: {
        padding: 16,
        paddingBottom: 30,
    },

    notification: {
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,

        flexDirection: "row",
        alignItems: "center",

        elevation: 2,
    },

    unread: {
        borderLeftWidth: 4,
        borderLeftColor: colors.primary,
    },

    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,

        backgroundColor: colors.primary,

        justifyContent: "center",
        alignItems: "center",

        marginRight: 14,
    },

    notificationContent: {
        flex: 1,
    },

    titleRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    notificationTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        color: colors.text,
    },

    unreadTitle: {
        fontWeight: "800",
    },

    unreadDot: {
        width: 9,
        height: 9,
        borderRadius: 5,
        backgroundColor: colors.primary,
        marginLeft: 8,
    },

    message: {
        fontSize: 14,
        color: colors.textSecondary,
        marginTop: 5,
        lineHeight: 20,
    },

    time: {
        fontSize: 12,
        color: colors.textSecondary,
        marginTop: 7,
    },

    empty: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        paddingHorizontal: 30,
    },

    emptyTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: colors.text,
        marginTop: 15,
    },

    emptyText: {
        textAlign: "center",
        fontSize: 15,
        color: colors.textSecondary,
        marginTop: 8,
    },

});