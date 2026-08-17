import { Colors } from "@/constants/theme";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

interface NotificationBadgeProps {
    quantity: number;
};

export default function NotificationBadge({
    quantity
}: NotificationBadgeProps) {

    const colorScheme = useColorScheme() ?? "light";
    const colors = Colors[colorScheme];

    const styles = createStyles(colors);

    
    if (quantity <= 0) {
        return null;
    }

    return (
        <View style={styles.badge}>
            <Text style={styles.text}>
                {quantity > 99 ? "99+" : quantity}
            </Text>
        </View>
    );
}

const createStyles = (colors: typeof Colors["dark" | "light"]) => StyleSheet.create({
    badge: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        right: -8,
        top: -6,
        
        backgroundColor: "#ff0000",
        
        width: 20,
        aspectRatio: 1/1,
        borderRadius: 10, 
    },
    
    text: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "800",
    },

});