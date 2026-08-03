import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {

    function goToOpportunities() {
        // router.push("/opportunities");
    }

    return (
        <ScrollView
            style={styles.container}
            // contentContainerStyle={{ padding: 30 }}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.header}>
                <Text style={styles.title}>
                    Thiago Vieira
                </Text>
                <Pressable style={styles.notificationButton}>
                    <Ionicons name="notifications" size={24} style={styles.notificationIcon}/>
                    <View style={styles.notificationQuantity}>1</View>
                </Pressable>
            </View>

            {/* Oportunidades */}
            <Pressable style={styles.card} onPress={() => goToOpportunities()}>
                <Text style={styles.title}>🔥 Oportunidades perto de você</Text>

                <Text style={styles.requests}>12 novos pedidos</Text>

                <Ionicons name="arrow-forward" size={28} style={styles.arrowIcon}/>
            </Pressable>

            {/* Pedido 1 */}
            <View style={styles.jobCard}>
                <Text style={styles.jobTitle}>Construção de muro</Text>
                <Image 
                    source={require("@/assets/images/job.png")}
                    style={styles.jobImage}
                />

                <Text style={styles.jobInfo}>
                    📍 2,1 km
                </Text>

                <Text style={styles.jobInfo}>
                    Avenida Americanas 346, São Paulo - SP
                </Text>

                <Text style={styles.jobInfo}>
                    Preciso de um pedreiro com experiencia, URGENTE!!
                </Text>

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
        backgroundColor: "#e69d3f",
        padding: 8
    },

    header: {
        // backgroundColor: "#ff6a00",
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

    notificationQuantity: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        right: -8,
        top: -6,
        
        backgroundColor: "#ff0000",
        color: "#fff",
        
        width: 20,
        aspectRatio: 1/1,
        borderRadius: 10, 
        
        fontSize: 14,
        fontWeight: "800",
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#000",
    },

    card: {
        backgroundColor: "#FFF",
        borderRadius: 18,
        padding: 20,
        marginBottom: 18,
        elevation: 3,
        position: "relative"
    },

    arrowIcon: {
        position: "absolute",
        right: 24,
        top: "50%",
        transform: [{ translateY: "-50%" }],
        color: PRIMARY
    },

    online: {
        fontSize: 18,
        marginTop: 12,
        color: "#22A447",
        fontWeight: "600",
    },

    rating: {
        fontSize: 24,
        // marginTop: 12,
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
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 20,
        marginBottom: 18,
        elevation: 3,
    },

    jobTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#000000",
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
        color: "#FFFFFF"
    },

    jobImage: {
        width: "auto",
        height: 180,
    }
});

    // #e69d3f
    // branco e preto

// 🟧 Primária	Laranja	#FF6B00
// 🟨 Secundária	Dourado	#D4AF37
// 🟫 Escura	Marrom	#5E4B1F
// 🟩 Sucesso	Verde	#22C55E
// 🔴 Erro	Vermelho	#EF4444
// ⚪ Fundo	Branco	#FFFFFF
// ⚪ Fundo da tela	Cinza claro	#F8F8F8
// ⚫ Texto	Quase preto	#1F2937
// ⚪ Texto secundário	Cinza	#6B7280