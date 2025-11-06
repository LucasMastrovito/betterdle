#!/usr/bin/env python3
"""
clean_mario_json.py

- Remplace les ", " par ";" dans le champ 'colors'
- Supprime les "(année)" dans le champ 'first_appearance'
- Transforme le champ 'year' en int
"""

import json
import re
import sys

def clean_json(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    for entry in data:
        # --- Colors : ", " -> ";" ---
        colors = entry.get("colors")
        if colors and isinstance(colors, str):
            entry["colors"] = colors.replace(", ", ";")

        # --- first_appearance : enlever "(année)" ---
        first_appearance = entry.get("first_appearance")
        if first_appearance and isinstance(first_appearance, str):
            entry["first_appearance"] = re.sub(r"\s*\(\d{4}\)$", "", first_appearance)

        # --- year : string -> int ---
        year = entry.get("year")
        if year:
            try:
                entry["year"] = int(year)
            except ValueError:
                entry["year"] = None  # ou garder la valeur originale si tu préfères

    # Écriture du fichier nettoyé
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Fichier nettoyé écrit dans {output_file} ({len(data)} entrées).")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python clean_mario_json.py input.json output.json")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]
    clean_json(input_file, output_file)
