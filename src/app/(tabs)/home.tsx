import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    return (
        <ScrollView
            style={styles.container}
            // contentContainerStyle={{ padding: 30 }}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.header}>
                <Text>
                    Thiago
                </Text>

            </View>

            {/* Perfil */}
            <View style={styles.card}>
             

                <Text style={styles.rating}>★★★★★ 4.9</Text>

                <View style={styles.divider} />

                <Text style={styles.subtitle}>Esta semana</Text>

                <View style={styles.statRow}>
                    <Text style={styles.stat}>👁️ 82 visualizações</Text>
                </View>

                <View style={styles.statRow}>
                    <Text style={styles.stat}>💬 7 contatos</Text>
                </View>

                <View style={styles.statRow}>
                    <Text style={styles.stat}>⭐ 2 novas avaliações</Text>
                </View>

                <View style={styles.containerButtons}>
                    <Pressable style={[styles.button, styles.buttonProfileEdit]}>
                        <Text style={styles.buttonText}>Editar perfil</Text>
                    </Pressable>

                    <Pressable style={[styles.button, styles.buttonProfileEditPlus]}>
                        <Text style={[styles.buttonText, styles.buttonTextPlus]}>Turbine seu perfil</Text>
                    </Pressable>
                </View>
            </View>

            {/* Oportunidades */}
            <View style={styles.card}>
                <Text style={styles.title}>🔥 Oportunidades perto de você</Text>

                <Text style={styles.requests}>12 novos pedidos</Text>
            </View>

            {/* Pedido 1 */}
            <View style={styles.jobCard}>
                <Text style={styles.jobTitle}>🏠 Construção de muro</Text>

                <Text style={styles.jobInfo}>📍 2,1 km</Text>

                <Text style={styles.price}>R$ 1.500</Text>

                <Text style={styles.date}>Hoje</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Ver pedido</Text>
                </TouchableOpacity>
            </View>

            {/* Pedido 2 */}
            <View style={styles.jobCard}>
                <Text style={styles.jobTitle}>🚿 Assentar porcelanato</Text>

                <Text style={styles.jobInfo}>📍 4 km</Text>

                <Text style={styles.price}>R$ 900</Text>

                <Text style={styles.date}>Amanhã</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Ver pedido</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={styles.all}>
                    Ver todas as oportunidades →
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const PRIMARY = "#FF6B00";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },

    header: {
        backgroundColor: "#FF6B00",
        padding: 30
    },

    greeting: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 20,
        color: "#111",
    },

    card: {
        backgroundColor: "#FFF",
        borderRadius: 18,
        padding: 20,
        marginBottom: 18,
        elevation: 3,
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111",
    },

    online: {
        fontSize: 18,
        marginTop: 12,
        color: "#22A447",
        fontWeight: "600",
    },

    rating: {
        fontSize: 24,
        marginTop: 12,
        color: "#F7B500",
        fontWeight: "700",
    },

    divider: {
        height: 1,
        backgroundColor: "#E5E5E5",
        marginVertical: 18,
    },

    subtitle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 12,
    },

    statRow: {
        marginBottom: 10,
    },

    stat: {
        fontSize: 18,
        color: "#444",
    },

    button: {
        backgroundColor: PRIMARY,
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
        color: PRIMARY,
    },

    jobCard: {
        backgroundColor: "#FFF",
        borderRadius: 18,
        padding: 20,
        marginBottom: 18,
        elevation: 3,
    },

    jobTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111",
    },

    jobInfo: {
        marginTop: 12,
        fontSize: 18,
        color: "#666",
    },

    price: {
        marginTop: 8,
        fontSize: 24,
        color: "#22A447",
        fontWeight: "700",
    },

    date: {
        marginTop: 8,
        fontSize: 18,
        color: "#555",
    },

    all: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
        color: PRIMARY,
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
        backgroundColor: PRIMARY
    },

    buttonProfileEditPlus: {
        flex: 1,
        backgroundColor: "#d1a71c",
        borderWidth: 1,
        borderColor: "#614f1d"
    },

    buttonTextPlus: {
        color: "#614f1d"
    }
});

// 🟧 Primária	Laranja	#FF6B00
// 🟨 Secundária	Dourado	#D4AF37
// 🟫 Escura	Marrom	#5E4B1F
// 🟩 Sucesso	Verde	#22C55E
// 🔴 Erro	Vermelho	#EF4444
// ⚪ Fundo	Branco	#FFFFFF
// ⚪ Fundo da tela	Cinza claro	#F8F8F8
// ⚫ Texto	Quase preto	#1F2937
// ⚪ Texto secundário	Cinza	#6B7280