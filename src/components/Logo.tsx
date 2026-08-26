import { useTheme } from "@/contexts/themeContext";
import { ThemeColors } from "@/types/ThemeColors";
import { StyleSheet, Text, View } from "react-native"

type LogoSize = "small" | "medium" | "large";

interface LogoProps {
    size?: LogoSize;
    showSubtitle?: boolean;
};

const sizes = {
    small: {
        logo: 40,
        title: 22,
        subtitle: 13,
    },
    medium: {
        logo: 55,
        title: 28,
        subtitle: 15,
    },
    large: {
        logo: 70,
        title: 34,
        subtitle: 16,
    },
};


export default function Logo({
    size = "large",
    showSubtitle = true,
}: LogoProps) {


    const { colors } = useTheme();
    const styles = createStyles(colors);
    
    const currentSize = sizes[size];

    return (
        <View style={styles.container}>
            <Text 
                style={[
                    styles.logo,
                    { fontSize: currentSize.logo },    
                ]}
            >
                🤝
            </Text>
            
            <Text 
                style={[
                    styles.title,
                    { fontSize: currentSize.title },
                ]}
            >
                Camarada
            </Text>

            {showSubtitle && (
                <Text 
                    style={[
                        styles.subtitle,
                        { fontSize: currentSize.subtitle },
                    ]}
                >
                    Encontre profissionais ou ofereça seus serviços.
                </Text>
            )}
        </View>
    );
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({
    container: {
        alignItems: "center",
    },
    
    logo: {
    },

    title: {
        fontWeight: "700",
        color: colors.text
    },

    subtitle: {
        textAlign: "center",
        color: colors.textSecondary,
        marginTop: 10,
        marginBottom: 50,
        maxWidth: 300,
    },
});