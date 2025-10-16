function hashStringToNumber(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function seededShuffle(array, seed) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const rand = seededRandom(seed + i);
    const j = Math.floor(rand * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getRandomCharacter(data, modeSeed = "") {
  const today = new Date().toISOString().slice(0, 10);
  const combinedSeed = hashStringToNumber(today + modeSeed);

  const shuffled = seededShuffle(data, combinedSeed);
  return shuffled[0];
}

export function filterByField(arr, field) {
  return arr.filter(item => item[field] != null);
}