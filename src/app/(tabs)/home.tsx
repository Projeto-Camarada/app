import NotificationBadge from "@/components/NotificationBadge";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";

const opportunities = [
    {
        id: "1",
        title: "🏠 Construção de muro",
        price: "R$ 1.500",
        distance: "2,1 km",
        date: "Hoje",
    },
    {
        id: "2",
        title: "🚿 Assentar porcelanato",
        price: "R$ 900",
        distance: "4 km",
        date: "Amanhã",
    },
    {
        id: "3",
        title: "⚡ Instalação elétrica",
        price: "R$ 650",
        distance: "6 km",
        date: "Hoje",
    },
];

export default function HomeScreen() {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <FlatList
            data={opportunities}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}

            style={styles.container}

            contentContainerStyle={styles.contentFlat}

            ListHeaderComponent={
                <>
                    <View style={styles.header}>
                        <Text style={styles.title}>Thiago Vieira</Text>
                        <Pressable style={styles.notificationButton} onPress={() => router.push("/notifications")}>
                            <Ionicons name="notifications" size={24} style={styles.notificationIcon}/>
                            <NotificationBadge quantity={1}/>
                        </Pressable>
                    </View>

                    <Pressable style={[styles.card, styles.cardPremium]} >
                        <Text style={[styles.title, styles.titlePremium]}>🔥 Oportunidades para você</Text>

                        <Text style={[styles.requests, styles.infoPremium]}>Não perca</Text>

                        <Ionicons name="arrow-forward" size={28} style={styles.arrowIcon}/>
                    </Pressable>

                </>
            }

            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text style={styles.jobTitle}>{item.title}</Text>
                    <Image 
                        source={require("@/assets/images/job.png")}
                        style={styles.jobImage}
                        resizeMode="cover"
                    />

                    <Text style={styles.jobInfo}>
                        {item.distance}
                    </Text>

                    <Text style={styles.jobInfo}>
                        Avenida Americanas 346, São Paulo - SP
                    </Text>

                    <Text style={styles.jobInfo}>
                        Preciso de um pedreiro com experiencia, URGENTE!!
                    </Text>

                    <Text style={styles.price}>{item.price}</Text>

                    <Text style={styles.date}>{item.date}</Text>

                    <View style={styles.buttons}>
                        <Pressable style={styles.cancelButton}>
                            <Text style={styles.cancelText}>
                                Não tenho interesse
                            </Text>
                        </Pressable>

                        <Pressable style={styles.interestButton}>
                            <Text style={styles.interestText}>
                                Tenho interesse
                            </Text>
                        </Pressable>
                    </View>
                </View>
            )}
        />
    );
}

const createStyles = (colors: ThemeColors) =>  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundSelected,
    },

    contentFlat: {
    },

    header: {
        backgroundColor: colors.primary,
        padding: 30,
        // paddingTop: 45,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    notificationButton: {
        position: "relative"
    },

    notificationIcon: {
        // color: "#fff"
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#000",
    },

    titlePremium: {
        color: colors.background
    },

    infoPremium: {
        color: colors.background
    },

    content: {
        paddingHorizontal: 16
    },

    cardPremium: {
        backgroundColor: colors.premium,
    },

    card: {
        backgroundColor: colors.card,
        borderRadius: 18,
        padding: 20,
        marginVertical: 18,
        elevation: 3,
        position: "relative",
        marginHorizontal: 8
    },

    arrowIcon: {
        position: "absolute",
        right: 24,
        top: "50%",
        transform: [{ translateY: -14 }],
        color: colors.background
    },

    button: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20,
    },

    buttonText: {
        color: "#FFF",
        fontWeight: "700",
        fontSize: 18,
    },

    requests: {
        marginTop: 15,
        fontSize: 26,
        fontWeight: "700",
        color: colors.primary,
    },

    jobCard: {
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 20,
        marginBottom: 18,
        elevation: 3,
    },

    jobTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: colors.text,
        marginBottom: 14
    },

    jobInfo: {
        marginTop: 12,
        fontSize: 18,
        color: colors.text,
    },

    price: {
        marginTop: 8,
        fontSize: 24,
        color: colors.success,
        fontWeight: "700",
    },

    date: {
        marginTop: 8,
        fontSize: 18,
        color: colors.text,
    },

    all: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
        color: colors.primary,
        marginVertical: 25,
    },

    containerButtons: {
        flexDirection: "row",
        gap: 10,
        width: "100%",
    },

    buttonProfileEdit: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.primary
    },

    jobImage: {
        width: "100%",
        height: 180,
        borderRadius: 12,
    },

    buttons: {
        flexDirection: "row",
        gap: 10,
        marginTop: 20,
    },

    cancelButton: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: colors.text,
        alignItems: "center",
    },

    interestButton: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: colors.primary,
        alignItems: "center",
    },

    cancelText: {
        fontWeight: "600",
        fontSize: 16,
        color: colors.background,
    },

    interestText: {
        fontWeight: "700",
        fontSize: 18,
        color: colors.background,
    },

});
