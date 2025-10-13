/* function hashStringToNumber(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededShuffle(array, seed) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (seed + i) % arr.length;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getRandomCharacter(data) {
  const today = new Date().toISOString().slice(0, 10);
  const seed = hashStringToNumber(today);

  const shuffled = seededShuffle(data, seed);
  return shuffled[0];
} */

  function hashStringToNumber(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // 32-bit
  }
  return Math.abs(hash);
}

// Générateur pseudo-aléatoire déterministe (même résultat pour même seed)
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Shuffle déterministe basé sur seed
function seededShuffle(array, seed) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const rand = seededRandom(seed + i);
    const j = Math.floor(rand * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 🎯 Fonction principale
export function getRandomCharacter(data, modeSeed = "") {
  const today = new Date().toISOString().slice(0, 10); // ex: "2025-10-13"
  const combinedSeed = hashStringToNumber(today + modeSeed); // dépend de la date + de la seed

  const shuffled = seededShuffle(data, combinedSeed);
  return shuffled[0];
}
