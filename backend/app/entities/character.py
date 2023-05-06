characters = {
"Monkey D. Luffy": [
{
"ID": 1,
"Age": "19",
"Bounty": "1.5 billion berries",
"Devil Fruit": "Gomu Gomu no Mi",
"Affiliation": "Straw Hat Pirates",
"Form": "Fourth Gear",
"Ability": "Haki"
}
],
"Roronoa Zoro": [
{
"ID": 2,
"Age": "21",
"Bounty": "320 million berries",
"Swords": "Wado Ichimonji, Sandai Kitetsu, Shusui",
"Affiliation": "Straw Hat Pirates",
"Form": "Asura",
"Ability": "Haki"
}
],
"Nami": [
{
"ID": 3,
"Age": "20",
"Bounty": "66 million berries",
"Weapon": "Clima-Tact",
"Affiliation": "Straw Hat Pirates",
"Form": "Zeus",
"Ability": "Weather manipulation"
}
],
"Usopp": [
{
"ID": 4,
"Age": "19",
"Bounty": "200 million berries",
"Weapon": "Kabuto, Black Kabuto, various gadgets",
"Affiliation": "Straw Hat Pirates",
"Form": "Sogeking",
"Ability": "Sniper skills"
}
],
"Sanji": [
{
"ID": 5,
"Age": "21",
"Bounty": "330 million berries",
"Devil Fruit": "None",
"Affiliation": "Straw Hat Pirates",
"Form": "Raid Suit",
"Ability": "Combat skills"
}
],
"Tony Tony Chopper": [
{
"ID": 6,
"Age": "17",
"Bounty": "100 berries (former)",
"Devil Fruit": "Hito Hito no Mi",
"Affiliation": "Straw Hat Pirates",
"Form": "Monster Point",
"Ability": "Enhanced physical abilities"
}
],
"Nico Robin": [
{
"ID": 7,
"Age": "30",
"Bounty": "130 million berries (former)",
"Devil Fruit": "Hana Hana no Mi",
"Affiliation": "Straw Hat Pirates",
"Form": "Gigantesco Mano",
"Ability": "Flower power"
}
],
"Franky": [
{
"ID": 8,
"Age": "36",
"Bounty": "94 million berries (former)",
"Weapon": "Strong Right, Coup de Burst, Radical Beam",
"Affiliation": "Straw Hat Pirates",
"Form": "General Franky",
"Ability": "Cyborg enhancements"
}
],
"Brook": [
{
"ID": 9,
"Age": "90",
"Bounty": "83 million berries",
"Weapon": "Soul Solid",
"Affiliation": "Straw Hat Pirates",
"Form": "Soul King",
"Ability": "Soul-related powers"
}
]
}

if __name__ == "__main__":
    for keys, values in characters.items():
        print(f"{keys}: {values['id']}")