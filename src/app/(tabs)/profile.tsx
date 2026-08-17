import { Colors } from "@/constants/theme";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function Profile() {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >

            {/* HEADER */}
        <View style={styles.header}>

            <Pressable
                style={styles.menuButton}
                onPress={() => router.push("/settings")}
            >
                <Ionicons
                    name="menu"
                    size={30}
                    color={colors.background}
                />
            </Pressable>

            <Pressable style={styles.avatar}>
                <Text style={styles.avatarText}>
                    TV
                </Text>
            </Pressable>

            <Text style={styles.name}>
                Thiago Vieira
            </Text>

            <Text style={styles.phone}>
                (11) 99999-9999
            </Text>

            <View style={styles.plan}>
                <Ionicons
                    name="star"
                    size={16}
                    color={colors.background}
                />

                <Text style={styles.planText}>
                    Plano Premium
                </Text>
            </View>

        </View>


            {/* SOBRE */}
            <View style={styles.card}>

                <Text style={styles.sectionTitle}>
                    Sobre
                </Text>

                <Text style={styles.bio}>
                    Desenvolvedor e prestador de serviços.
                    Sempre buscando entregar um trabalho de qualidade.
                </Text>

            </View>


            {/* INFORMAÇÕES */}
            <View style={styles.card}>

                <Text style={styles.sectionTitle}>
                    Informações
                </Text>

                <View style={styles.infoRow}>
                    <Ionicons
                        name="person-outline"
                        size={21}
                        color={colors.textSecondary}
                    />

                    <Text style={styles.info}>
                        CPF: •••.•••.•••-••
                    </Text>
                </View>

                <View style={styles.infoRow}>
                    <Ionicons
                        name="shield-checkmark-outline"
                        size={21}
                        color={colors.success}
                    />

                    <Text style={styles.info}>
                        Perfil verificado
                    </Text>
                </View>

                <View style={styles.infoRow}>
                    <Ionicons
                        name="briefcase-outline"
                        size={21}
                        color={colors.textSecondary}
                    />

                    <Text style={styles.info}>
                        Experiência: 5 anos
                    </Text>
                </View>

                <View style={styles.infoRow}>
                    <Ionicons
                        name="calendar-outline"
                        size={21}
                        color={colors.textSecondary}
                    />

                    <Text style={styles.info}>
                        Membro desde Julho/2026
                    </Text>
                </View>

            </View>


            {/* ESTATÍSTICAS */}
            <View style={styles.card}>

                <Text style={styles.sectionTitle}>
                    Estatísticas
                </Text>

                <View style={styles.stats}>

                    <View style={styles.stat}>
                        <Text style={styles.number}>
                            82
                        </Text>

                        <Text style={styles.statLabel}>
                            Visualizações
                        </Text>
                    </View>

                    <View style={styles.stat}>
                        <Text style={styles.number}>
                            18
                        </Text>

                        <Text style={styles.statLabel}>
                            Serviços
                        </Text>
                    </View>

                    <View style={styles.stat}>
                        <Text style={styles.number}>
                            4.9
                        </Text>

                        <Text style={styles.statLabel}>
                            Avaliação
                        </Text>
                    </View>

                </View>

            </View>

        </ScrollView>
    );
}


const createStyles = (
    colors: ThemeColors
) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundSelected,
    },

    content: {
        paddingBottom: 20,
    },


    /* HEADER */

    header: {
        backgroundColor: colors.primary,
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

    menuButton: {
        position: "absolute",
        top: 20,
        right: 10,

        width: 44,
        height: 44,
    },

    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",

        elevation: 4,
    },

    avatarText: {
        fontSize: 38,
        fontWeight: "800",
        color: colors.primary,
    },

    name: {
        color: colors.background,
        fontSize: 28,
        fontWeight: "700",
        marginTop: 18,
    },

    phone: {
        color: colors.background,
        opacity: 0.85,
        marginTop: 6,
        fontSize: 16,
    },


    /* PREMIUM */

    plan: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,

        backgroundColor: colors.premium,
        borderWidth: 2,

        paddingHorizontal: 18,
        paddingVertical: 9,

        borderRadius: 30,

        marginTop: 16,
    },

    planText: {
        color: colors.text,
        fontWeight: "700",
        fontSize: 15,
    },


    /* CARD */

    card: {
        backgroundColor: colors.card,

        marginHorizontal: 16,
        marginTop: 16,

        borderRadius: 18,

        padding: 20,

        elevation: 3,
    },

    sectionTitle: {
        fontSize: 21,
        fontWeight: "700",
        color: colors.text,

        marginBottom: 15,
    },


    /* BIO */

    bio: {
        fontSize: 16,
        color: colors.textSecondary,
        lineHeight: 24,
    },


    /* INFO */

    infoRow: {
        flexDirection: "row",
        alignItems: "center",

        gap: 12,

        marginBottom: 15,
    },

    info: {
        flex: 1,

        fontSize: 16,

        color: colors.textSecondary,
    },


    /* STATS */

    stats: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    stat: {
        alignItems: "center",
    },

    number: {
        fontSize: 28,
        fontWeight: "800",
        color: colors.primary,
    },

    statLabel: {
        marginTop: 4,

        fontSize: 14,

        color: colors.textSecondary,
    },

});