const Prodcuts = [
	{ "group": "G1", "subgroup": "S1", "item": "I1", "cost": 10 },
	{ "group": "G1", "subgroup": "S2", "item": "I2", "cost": 11 },
	{ "group": "G1", "subgroup": "S2", "item": "I3", "cost": 12 },
	{ "group": "G2", "subgroup": "S1", "item": "I4", "cost": 20 }
]

const Computers = [
	{ "group": "Software", "subgroup": "Wordprocess", "item": "Microsoft Word", "cost": 1230 },
    { "group": "Software", "subgroup": "Wordprocess", "item": "Notepad++", "cost": 4330 },
    { "group": "Hardware", "subgroup": "Hardisk", "item": "Segate", "cost":5500 },
	{ "group": "Hardware", "subgroup": "Monitor", "item": "Samsung", "cost": 9026 },
	{ "group": "Software", "subgroup": "Programming", "item": "Javascript", "cost": 234 },
	{ "group": "Software", "subgroup": "Programming", "item": "C#", "cost": 434 }
]

const Accessories = [
	{ "group": "Gents", "subgroup": "Shoes", "item": "Sneackers", "cost": 1800 },
	{ "group": "Ladies", "subgroup": "Shoes", "item": "Sandle", "cost": 2200 },
]


module.exports = {
    Prodcuts,
    Computers,
    Accessories
}