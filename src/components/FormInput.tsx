import { TextInput, View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import EyeButton from "./EyeButton";
import { formatPhone } from "@/validators/phone";
import { formatCpfCnpj } from "@/validators/cpfCnpj";
import { ThemeColors } from "@/types/ThemeColors";
import { useTheme } from "@/contexts/themeContext";
import { Ionicons } from "@expo/vector-icons";

type Suggestion = {
    id: number;
    name: string;
};

type Props = {
    field: string;
    value: string;
    placeholder: string;
    keyboardType?: any;
    optionsSelected: any[];
    onChange: (value: string) => void;
    
    suggestions?: any[];
    onSuggestionPress?: (itens: any) => void; 
    
    hidePassword: boolean;
    setHidePassword?: (value: boolean) => void;
};

export default function FormInput({
    field,
    value,
    placeholder,
    keyboardType,
    optionsSelected,
    onChange,
    
    suggestions,
    onSuggestionPress, 
    
    hidePassword,
    setHidePassword,
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

    function closeOption() {
           
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
            >

                
            </TextInput>

            {field === "password" && (
                <EyeButton
                    isActive={hidePassword}
                    setIsActive={setHidePassword!}
                />
            )}

            {suggestions && suggestions.length > 0 && value.length > 0 && (
                <View style={styles.suggestionsContainer}>
                    <FlatList
                        data={suggestions}
                        keyExtractor={(item) => String(item.id)}
                        keyboardShouldPersistTaps="handled"
                        nestedScrollEnabled
                        renderItem={({ item }) => (
                            <Pressable
                                style={styles.suggestion}
                                onPress={() => onSuggestionPress?.(item)}
                            >
                                <Text style={styles.suggestionText}>
                                    {item.name}
                                </Text>
                            </Pressable>
                        )}
                    />
                </View>
            )} 
            
            {optionsSelected && optionsSelected.length > 0 && (
                <View style={styles.containerOptionSelected}>
                    {optionsSelected.map(it => (
                        <View style={styles.optionSelected}>
                            <Text style={styles.optionText}>
                                {it.name}
                            </Text>
                            {/* função para remover da lista */}
                            <Pressable onPress={closeOption}>
                                <Ionicons name="close" color={colors.danger} size={24}/>
                            </Pressable>
                        </View>
                    ))}
                </View>
            )}

        </View>
    );
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({

    container: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 2,
        elevation: 2
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

    suggestionsContainer: {
        position: "absolute",
        top: 52,
        width: "100%",
        backgroundColor: colors.background,
        maxHeight: 200,
        marginTop: 5,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 12,
        overflow: "hidden",
    },

    suggestion: {
        padding: 15,
        borderColor: colors.backgroundSelected,
        borderWidth: 1,
    },

    suggestionText: {
        fontSize: 16,
        color: colors.text,
    },

    containerOptionSelected: {
        position: "absolute",
        top: -34,
        right: 0,
        flexDirection: "row",
        gap: 8,
    },

    optionSelected: {
        borderColor: colors.background,
        borderWidth: 2,
        flexDirection: "row",
        backgroundColor: colors.primary,
        borderRadius: 12,
        paddingHorizontal: 8,
        gap: 12,
        alignItems: "center",
    },

    optionText: {
        fontSize: 20
    }

});