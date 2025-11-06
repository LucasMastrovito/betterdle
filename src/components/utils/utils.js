export function isImg(str) {
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

export function formatValue(value, field) {
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
    } else if (field.format.style === "locale") {
        result = Number(result).toLocaleString("fr-FR");
    }

    if (field.format.suffix) {
        result += field.format.suffix;
    }

    return result;
}
