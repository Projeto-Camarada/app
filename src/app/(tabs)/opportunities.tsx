import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

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

export default function OpportunitiesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Oportunidades</Text>
            <Text style={styles.subtitle}>
                12 serviços próximos de você
            </Text>

            <FlatList
                data={opportunities}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.jobTitle}>{item.title}</Text>

                        <Text style={styles.price}>{item.price}</Text>

                        <Text style={styles.info}>📍 {item.distance}</Text>

                        <Text style={styles.info}>📅 {item.date}</Text>

                        <Text style={styles.description}>
                            Cliente procura profissional para realizar este serviço.
                        </Text>

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
        fontSize: 28,
        fontWeight: "700",
    },

    subtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },

    card: {
        backgroundColor: "#FFF",
        borderRadius: 16,
        padding: 18,
        marginBottom: 16,
        elevation: 2,
    },

    jobTitle: {
        fontSize: 20,
        fontWeight: "700",
    },

    price: {
        fontSize: 24,
        fontWeight: "700",
        color: "#22A447",
        marginTop: 10,
    },

    info: {
        fontSize: 16,
        color: "#666",
        marginTop: 5,
    },

    description: {
        marginTop: 15,
        fontSize: 15,
        color: "#444",
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
        backgroundColor: "#ECECEC",
        alignItems: "center",
    },

    interestButton: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: PRIMARY,
        alignItems: "center",
    },

    cancelText: {
        fontWeight: "600",
        color: "#444",
    },

    interestText: {
        fontWeight: "700",
        color: "#FFF",
    },
});