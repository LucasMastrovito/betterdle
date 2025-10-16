export function saveTry(game, mode, tryValue) {
  const stored = localStorage.getItem("dleData");
  let data = stored ? JSON.parse(stored) : {};

  if (!data[game]) {
    data[game] = {};
  }
  if (!data[game][mode]) {
    data[game][mode] = { tries: [] };
  }
  data[game][mode].tries.push(tryValue);
  localStorage.setItem("dleData", JSON.stringify(data));
}

export function getTries(game, mode) {
  const stored = localStorage.getItem("dleData");
  if (!stored) return [];

  const data = JSON.parse(stored);
  if (!data[game]) return[];
  return data[game][mode]?.tries || [];
}