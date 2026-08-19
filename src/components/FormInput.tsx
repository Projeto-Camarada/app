import { TextInput, View, StyleSheet } from "react-native";
import EyeButton from "./EyeButton";
import { formatPhone } from "@/validators/phone";
import { formatCpfCnpj } from "@/validators/cpfCnpj";
import { ThemeColors } from "@/types/ThemeColors";
import { useTheme } from "@/contexts/themeContext";

type Props = {
    field: string;
    value: string;
    placeholder: string;
    keyboardType?: any;
    hidePassword: boolean;
    setHidePassword?: (value: boolean) => void;
    onChange: (value: string) => void;
};

export default function FormInput({
    field,
    value,
    placeholder,
    keyboardType,
    hidePassword,
    setHidePassword,
    onChange,
}: Props) {

    const { colors } = useTheme();
    const styles = createStyles(colors);


    function handleChange(text: string) {

        let newValue = text;

        if (field === "phone") {
            newValue = text
                .replace(/\D/g, "")
                .slice(0, 11);
        }

        if (field === "document") {
            newValue = text
                .replace(/\D/g, "")
                .slice(0, 14);
        }

        onChange(newValue);
    }

    function getValue() {

        if (field === "phone") {
            return formatPhone(value);
        }

        if (field === "document") {
            return formatCpfCnpj(value);
        }

        return value;
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={
                    field === "password" && hidePassword
                }
                value={getValue()}
                onChangeText={handleChange}
            />

            {field === "password" && (
                <EyeButton
                    isActive={hidePassword}
                    setIsActive={setHidePassword!}
                />
            )}

        </View>
    );
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({

    container: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
    },

    input: {
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: colors.card,
        color: colors.text,
        borderRadius: 14,
        paddingHorizontal: 18,
        height: 58,
        flex: 1,
        fontSize: 18,
    },

});