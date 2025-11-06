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