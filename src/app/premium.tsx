import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PremiumScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ padding: 20 }}
        >
            <Text style={styles.crown}>👑</Text>

            <Text style={styles.title}>
                Turbine seu Perfil
            </Text>

            <Text style={styles.subtitle}>
                Receba mais pedidos e apareça antes dos outros profissionais.
            </Text>

            <View style={styles.card}>

                <Text style={styles.item}>✅ Destaque nas pesquisas</Text>

                <Text style={styles.item}>✅ Até 5x mais visualizações</Text>

                <Text style={styles.item}>✅ Receba pedidos primeiro</Text>

                <Text style={styles.item}>✅ Selo de profissional Premium</Text>

                <Text style={styles.item}>✅ Suporte prioritário</Text>

                <Text style={styles.item}>✅ Estatísticas completas</Text>

            </View>

            <View style={styles.priceCard}>

                <Text style={styles.small}>
                    Apenas
                </Text>

                <Text style={styles.price}>
                    R$ 29,90
                </Text>

                <Text style={styles.month}>
                    por mês
                </Text>

            </View>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                    Assinar Premium
                </Text>
            </Pressable>

            <Text style={styles.cancel}>
                Cancele quando quiser.
            </Text>

        </ScrollView>
    );
}

const PRIMARY = "#FF6B00";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },

    crown: {
        fontSize: 70,
        textAlign: "center",
        marginTop: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 10,
    },

    subtitle: {
        marginTop: 10,
        fontSize: 17,
        color: "#666",
        textAlign: "center",
        lineHeight: 24,
    },

    card: {
        backgroundColor: "#FFF",
        borderRadius: 18,
        padding: 22,
        marginTop: 30,
    },

    item: {
        fontSize: 18,
        marginBottom: 18,
        color: "#333",
    },

    priceCard: {
        backgroundColor: "#FFF8E6",
        borderRadius: 18,
        padding: 25,
        marginTop: 25,
        alignItems: "center",
    },

    small: {
        fontSize: 18,
        color: "#666",
    },

    price: {
        fontSize: 42,
        fontWeight: "800",
        color: PRIMARY,
    },

    month: {
        fontSize: 18,
        color: "#666",
    },

    button: {
        backgroundColor: PRIMARY,
        marginTop: 30,
        paddingVertical: 18,
        borderRadius: 15,
        alignItems: "center",
    },

    buttonText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "700",
    },

    cancel: {
        textAlign: "center",
        marginTop: 18,
        color: "#777",
        fontSize: 15,
        marginBottom: 40,
    },

});