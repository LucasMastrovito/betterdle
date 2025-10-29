export function saveTry(game, mode, filter, tryValue) {
  const stored = localStorage.getItem("dleData");
  let data = stored ? JSON.parse(stored) : {};

  if (!data[game]) {
    data[game] = {};
  }
  if (!data[game][mode]) {
    data[game][mode] = {};
  }
  if (!data[game][mode][filter]) {
    data[game][mode][filter] = { tries: [] };
  }
  data[game][mode][filter].tries.push(tryValue);
  localStorage.setItem("dleData", JSON.stringify(data));
}

export function getTries(game, mode, filter) {
  const stored = localStorage.getItem("dleData");
  if (!stored) return [];

  const data = JSON.parse(stored);
  if (!data[game]) return [];
  if (!data[game][mode]) return [];
  return data[game][mode][filter]?.tries || [];
}