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
        logoMargin: 8
    },
    medium: {
        logo: 55,
        title: 28,
        subtitle: 15,
        logoMargin: 14
    },
    large: {
        logo: 70,
        title: 34,
        subtitle: 16,
        logoMargin: 20
    },
};


export default function Logo({
    size = "large",
    showSubtitle = true,
}: LogoProps) {

    const currentSize = sizes[size];

    return (
        <View style={styles.container}>
            <Text 
                style={[
                    styles.logo,
                    { fontSize: currentSize.logo },    
                    { marginBottom: currentSize.logoMargin}
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

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    
    logo: {
    },

    title: {
        fontWeight: "700",
    },

    subtitle: {
        textAlign: "center",
        color: "#666",
        marginTop: 10,
        marginBottom: 50,
        maxWidth: 300,
    },
});