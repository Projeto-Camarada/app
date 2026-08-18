import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useTheme } from "@/contexts/themeContext";

type ToastType = "success" | "error" | "info";

interface ToastProps {
    visible: boolean;
    message: string;
    type?: ToastType;
    duration?: number;
    onHide: () => void;
}

export default function Toast({
    visible,
    message,
    type = "info",
    duration = 3000,
    onHide,
}: ToastProps) {

    const { colors } = useTheme();
    const translateY = useRef(new Animated.Value(-100)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        if (!visible) {
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: -100,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();

            return;
        }

        Animated.parallel([
            Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();

        const timeout = setTimeout(() => {
            onHide();
        }, duration);

        return () => clearTimeout(timeout);

    }, [visible]);

    if (!visible) return null;

    const icon =
        type === "success"
            ? "checkmark-circle"
            : type === "error"
                ? "close-circle"
                : "information-circle";

    const iconColor =
        type === "success"
            ? colors.success
            : type === "error"
                ? "#E53935"
                : colors.primary;

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                    transform: [{ translateY }],
                    opacity,
                },
            ]}
        >

            <Ionicons
                name={icon}
                size={25}
                color={iconColor}
            />

            <Text
                style={[
                    styles.message,
                    { color: colors.text },
                ]}
            >
                {message}
            </Text>

        </Animated.View>
    );
}

const styles = StyleSheet.create({

    container: {
        position: "absolute",
        top: 50,
        left: 20,
        right: 20,

        minHeight: 58,

        borderRadius: 14,
        borderWidth: 1,

        paddingHorizontal: 16,

        flexDirection: "row",
        alignItems: "center",

        gap: 10,

        elevation: 6,

        shadowOffset: {
            width: 0,
            height: 3,
        },

        shadowOpacity: 0.15,
        shadowRadius: 6,

        zIndex: 999,
    },

    message: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
    },

});