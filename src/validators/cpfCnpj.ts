export function formatCpfCnpj(value: string) {
    const numbers = value.replace(/\D/g, "").slice(0, 14);

    // CPF
    if (numbers.length <= 11) {

        if (numbers.length <= 3) {
            return numbers;
        }

        if (numbers.length <= 6) {
            return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
        }

        if (numbers.length <= 9) {
            return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
        }

        return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9)}`;
    }

    // CNPJ
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`;
}

export function isValidCpfCnpj(value: string): boolean {
    const document = value.replace(/\D/g, "");

    // CPF
    if (document.length === 11) {
        return isValidCPF(document);
    }

    // CNPJ
    if (document.length === 14) {
        return isValidCNPJ(document);
    }

    return false;
}

function isValidCPF(cpf: string): boolean {

    // Rejeita CPFs como 111.111.111-11
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let sum = 0;

    // Primeiro dígito
    for (let i = 0; i < 9; i++) {
        sum += Number(cpf[i]) * (10 - i);
    }

    let remainder = (sum * 10) % 11;

    if (remainder === 10) {
        remainder = 0;
    }

    if (remainder !== Number(cpf[9])) {
        return false;
    }

    sum = 0;

    // Segundo dígito
    for (let i = 0; i < 10; i++) {
        sum += Number(cpf[i]) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10) {
        remainder = 0;
    }

    return remainder === Number(cpf[10]);
}

function isValidCNPJ(cnpj: string): boolean {
    // Rejeita CNPJs como 11.111.111/1111-11
    if (/^(\d)\1{13}$/.test(cnpj)) {
        return false;
    }

    const calculateDigit = (
        value: string,
        weights: number[]
    ) => {

        let sum = 0;

        for (let i = 0; i < weights.length; i++) {
            sum += Number(value[i]) * weights[i];
        }

        const remainder = sum % 11;

        return remainder < 2
            ? 0
            : 11 - remainder;
    };

    // Primeiro dígito
    const firstDigit = calculateDigit(
        cnpj.substring(0, 12),
        [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    );

    if (firstDigit !== Number(cnpj[12])) {
        return false;
    }

    // Segundo dígito
    const secondDigit = calculateDigit(
        cnpj.substring(0, 13),
        [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    );

    return secondDigit === Number(cnpj[13]);
}
