import SettingsOption from "@/components/SettingsOption";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from "react-native";

export default function Settings() {

    const { colors } = useTheme();

    const styles = createStyles(colors);

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >

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
                    Configurações
                </Text>

            </View>


            <View style={styles.section}>

                <Text style={styles.sectionTitle}>
                    Gerais
                </Text>

                <SettingsOption 
                    icon="color-palette-outline"
                    title="Aparência"
                    description="Personalizar tema e aparência"
                    onPress={() => router.push("/appearance")}
                />                

            </View>


            <View style={styles.section}>

                <Text style={styles.sectionTitle}>
                    Conta
                </Text>

                <SettingsOption 
                    icon="person-outline"
                    title="Meu perfil"
                    description="Editar seus dados pessoais"
                />                

                <SettingsOption 
                    icon="diamond-outline"
                    color={colors.premium}
                    title="Plano"
                    description="Gerenciar seu plano Premium"
                />                
            </View>


            <View style={styles.section}>

                <Text style={styles.sectionTitle}>
                    Segurança
                </Text>


                <SettingsOption 
                    icon="lock-closed-outline"
                    title="Alterar senha"
                    description="Atualizar sua senha de acesso"
                />                

            </View>


            <View style={styles.section}>

                <Text style={styles.sectionTitle}>
                    Zona de Perigo
                </Text>


                <SettingsOption 
                    icon="log-out-outline"
                    color={colors.danger}
                    title="Sair da conta"
                    titleColor={colors.danger}
                    description="Encerrar sua sessão"
                />             

                <SettingsOption 
                    icon="trash-outline"
                    color={colors.danger}
                    title="Remover conta"
                    titleColor={colors.danger}
                    description="Excluir permanentemente sua conta"
                />             

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

    header: {
        flexDirection: "row",
        alignItems: "center",
        height: 80,

        backgroundColor: colors.primary,
        padding: 12
    },

    backButton: {
        marginRight: 14,
        marginLeft: 4,
    },

    headerTitle: {
        color: colors.text,
        fontSize: 28,
        fontWeight: "600",
    },

    section: {
        marginTop: 20,
        marginHorizontal: 16,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: colors.textSecondary,
        marginBottom: 8,
        marginLeft: 4,
    },

    dangerText: {
        color: colors.danger,
    },

});