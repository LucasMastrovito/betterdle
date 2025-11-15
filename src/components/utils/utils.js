export function isImg(str) {
    str = str.toLowerCase();
    return str.includes(".png") || str.includes(".jpg") || str.includes(".jpeg") || str.includes(".webp") || str.includes(".gif") || str.includes(".svg")
}

export function isSound(str) {
    return str.includes(".ogg") || str.includes(".wav") || str.includes(".mp3")
}

export function getUniqueValues(array, field) {
    const values = array
        .map(item => item[field])
        .filter(v => v !== undefined);

    return [...new Set(values)];
}

export function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function formatWithSpaces(num) {
    const [intPart, decPart] = num.toString().split(".");
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return decPart ? `${formattedInt}.${decPart}` : formattedInt;
}

export function formatValue(value, field, int = false) {
    if (!field.format) return value;

    let result = value;

    if (field.format.divider) {
        result = result / field.format.divider;
    }

    if (typeof field.format.decimals === "number") {
        result = result.toFixed(field.format.decimals);
    }

    if (field.format.style === "space") {
        result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    if (field.format.suffix) {
        result += field.format.suffix;
    }

    return int ? parseFloat(result.replaceAll(" ", "")) : result;
}

function getDecimalPlaces(num) {
    const str = num.toString();
    const decimalPart = str.split(".")[1];
    return decimalPart ? decimalPart.length : 0;
}

function digitsBeforeDecimal(num) {
    if (typeof num !== "number" || isNaN(num)) return 0;
    const intPart = Math.floor(Math.abs(num));
    return intPart.toString().length;
}

export function areNumbersClose(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        return false;
    }

    const diff = Math.abs(a - b);
    const avg = (Math.abs(a) + Math.abs(b)) / 2;

    if (diff === 0) return true;

    const isDecimal = (n) => n % 1 !== 0;

    if (isDecimal(a) || isDecimal(b)) {
        const decimalsA = getDecimalPlaces(a);
        const decimalsB = getDecimalPlaces(b);

        const maxDecimals = Math.max(decimalsA, decimalsB);
        let factor = Math.pow(10, digitsBeforeDecimal(a) === digitsBeforeDecimal(b) ? digitsBeforeDecimal(a) : 1);

        if ((a <= 1 && a >= 0) && (b <= 1 && b >= 0)) {
            factor = Math.min(2 + Math.log10(avg + 1), 5);
        }

        const tolerance = Math.pow(10, -maxDecimals) * factor;

        return diff <= tolerance;
    }

    if (avg >= 1000 && avg <= 3000) {
        return diff <= 2;
    }

    if (avg > 100000) {
        return diff <= avg * .1;
    }

    return diff <= 5;
}

