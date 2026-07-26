import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

interface PropsEyeButton {
    text: boolean;
    showText: (text: boolean) => void
};


export default function EyeButton({ text, showText }: PropsEyeButton) {
    return (
        <TouchableOpacity
            onPress={() => showText(!text)}
            style={styles.eyeButton}
        >
            <Ionicons
                name={text ? "eye-off-outline" : "eye-outline"}
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
