import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const PRIMARY = "#FF6B00";

export default function Profile() {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.header}>
                <Pressable style={styles.avatar}>
                    <Text style={styles.avatarText}>TV</Text>
                </Pressable>

                <Text style={styles.name}>Thiago Vieira</Text>

                <Text style={styles.phone}>
                    📱 (11) 99999-9999
                </Text>

                <View style={styles.plan}>
                    <Text style={styles.planText}>
                        ⭐ Plano Premium
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>
                    Sobre
                </Text>

                <Text style={styles.bio}>
                    Desenvolvedor e prestador de serviços.
                    Sempre buscando entregar um trabalho de qualidade.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>
                    Informações
                </Text>

                <Text style={styles.info}>
                    👤 CPF: •••.•••.•••-••
                </Text>

                <Text style={styles.info}>
                    🏅 Verificado
                </Text>

                <Text style={styles.info}>
                    💼 Experiência: 5 anos
                </Text>

                <Text style={styles.info}>
                    📅 Membro desde Julho/2026
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>
                    Estatísticas
                </Text>

                <View style={styles.stats}>
                    <View style={styles.stat}>
                        <Text style={styles.number}>82</Text>
                        <Text>Visualizações</Text>
                    </View>

                    <View style={styles.stat}>
                        <Text style={styles.number}>18</Text>
                        <Text>Serviços</Text>
                    </View>

                    <View style={styles.stat}>
                        <Text style={styles.number}>4.9</Text>
                        <Text>Avaliação</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>
                        Editar Perfil
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.button,
                        styles.secondaryButton,
                    ]}
                >
                    <Text style={styles.secondaryText}>
                        Gerenciar Plano
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.button,
                        styles.logout,
                    ]}
                >
                    <Text style={styles.buttonText}>
                        Sair da conta
                    </Text>
                </Pressable>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },

    header: {
        backgroundColor: PRIMARY,
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
    },

    avatarText: {
        fontSize: 38,
        fontWeight: "700",
        color: PRIMARY,
    },

    name: {
        color: "#FFF",
        fontSize: 28,
        fontWeight: "700",
        marginTop: 18,
    },

    phone: {
        color: "#FFF",
        marginTop: 6,
        fontSize: 16,
    },

    plan: {
        backgroundColor: "#D4AF37",
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 30,
        marginTop: 16,
    },

    planText: {
        color: "#5E4B1F",
        fontWeight: "700",
    },

    card: {
        backgroundColor: "#FFF",
        margin: 16,
        marginBottom: 0,
        borderRadius: 16,
        padding: 20,
    },

    sectionTitle: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 15,
    },

    bio: {
        fontSize: 16,
        color: "#555",
        lineHeight: 24,
    },

    info: {
        fontSize: 17,
        marginBottom: 14,
        color: "#444",
    },

    stats: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    stat: {
        alignItems: "center",
    },

    number: {
        fontSize: 28,
        fontWeight: "700",
        color: PRIMARY,
    },

    button: {
        backgroundColor: PRIMARY,
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 12,
    },

    buttonText: {
        color: "#FFF",
        fontWeight: "700",
        fontSize: 17,
    },

    secondaryButton: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: PRIMARY,
    },

    secondaryText: {
        color: PRIMARY,
        fontWeight: "700",
        fontSize: 17,
    },

    logout: {
        backgroundColor: "#EF4444",
    },

});