import json

INPUT_FILE = "champions_fixed.json"      # ton fichier d'origine
OUTPUT_FILE = "champions_fixed2.json"  # le fichier corrigé

def simplify_abilities(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f:
        champions = json.load(f)

    for champ in champions:
        if "abilities" in champ and isinstance(champ["skins"], list):
            new_abilities = []
            for ability in champ["skins"]:
                if isinstance(ability, dict) and "image_url" in ability:
                    url = ability["image_url"]
                    if url:
                        new_abilities.append(url)
            champ["skins"] = new_abilities

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(champions, f, ensure_ascii=False, indent=4)

    print(f" Abilities simplifiées et sauvegardées dans {output_file}")

if __name__ == "__main__":
    simplify_abilities(INPUT_FILE, OUTPUT_FILE)
