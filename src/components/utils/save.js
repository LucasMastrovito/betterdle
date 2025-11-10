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

export function saveLang(game, langValue) {
  const stored = localStorage.getItem("dleLang");
  let data = stored ? JSON.parse(stored) : {};

  if (!data[game]) {
    data[game] = {};
  }
  data[game]["lang"] = { lang: langValue };
  localStorage.setItem("dleLang", JSON.stringify(data));
}

export function getLang(game) {
  const stored = localStorage.getItem("dleLang");
  if (!stored) return "en";

  const data = JSON.parse(stored);
  if (!data[game]) return "en";
  if (!data[game]["lang"]) return "en";
  return data[game]["lang"].lang;
}