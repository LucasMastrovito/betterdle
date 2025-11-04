import requests
from bs4 import BeautifulSoup
import json
import time
import urllib.parse

# Charger le JSON existant
with open("disney_characters_en.json", "r", encoding="utf-8") as f:
    characters = json.load(f)

# Dictionnaires simples pour traduire side, gender, species
side_translation = {"Hero": "Héros", "Villain": "Méchant"}
gender_translation = {"Male": "Masculin", "Female": "Féminin"}
species_translation = {
    "Dog": "Chien",
    "Duck": "Canard",
    "Mouse": "Souris",
    "Cat": "Chat",
    "Cow": "Vache",
    "Hamster": "Hamster",
    "Chipmunk": "Tamia",
    "Human": "Humain"
}

def get_wikipedia_fr_title(en_title):
    """
    Cherche la page FR correspondante sur Wikipédia.
    Retourne le titre officiel français du film/personnage.
    """
    search_url = f"https://fr.wikipedia.org/w/index.php?search={urllib.parse.quote(en_title)}"
    resp = requests.get(search_url)
    if resp.status_code != 200:
        return en_title  # fallback anglais
    soup = BeautifulSoup(resp.text, "html.parser")
    
    # Vérifier si page redirige vers un titre exact
    h1 = soup.select_one("#firstHeading")
    if h1:
        return h1.text.strip()
    return en_title

# Parcourir le JSON et remplir les champs français
for char in characters:
    # Name : essayer Wikipédia FR
    char["name"] = get_wikipedia_fr_title(char["name"])
    time.sleep(0.3)  # éviter de spammer
    
    # First film : titre officiel FR
    char["first_film"] = get_wikipedia_fr_title(char["first_film"])
    char["aliases"] = char["first_film"]  # aliases = titre du film
    
    # Traduction side, gender, species
    char["side"] = side_translation.get(char["side"], char["side"])
    char["gender"] = gender_translation.get(char["gender"], char["gender"])
    char["species"] = species_translation.get(char["species"], char["species"])

# Sauvegarder le JSON français
with open("characters_fr.json", "w", encoding="utf-8") as f:
    json.dump(characters, f, indent=2, ensure_ascii=False)

print("JSON français généré avec noms et films officiels !")
