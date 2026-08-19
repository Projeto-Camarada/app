import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

interface EyeButtonProps {
    isActive: boolean;
    setIsActive: (text: boolean) => void
};


export default function EyeButton({ isActive, setIsActive }: EyeButtonProps) {
    return (
        <TouchableOpacity
            onPress={() => setIsActive(!isActive)}
            style={styles.eyeButton}
        >
            <Ionicons
                name={isActive ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="#666"
            />

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    eyeButton: {
        padding: 8,
        position: "absolute",
        right: 15
    },
});
