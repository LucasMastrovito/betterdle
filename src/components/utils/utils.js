export function isImg(str) {
    return str.includes(".png") || str.includes(".jpg") || str.includes(".jpeg") || str.includes(".webp") || str.includes(".gif")
}

export function isSound(str) {
    return str.includes(".ogg") || str.includes(".wav") || str.includes(".mp3")
}