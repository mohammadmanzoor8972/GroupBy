const operations = require('./tree.js')
const assert = require('assert')

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

it('Product Set A - must be an Array', () => {
 let products = operations.tree(Prodcuts);    
  assert.equal(Array.isArray(products), true);
})


it('Product Set A - Length must be 2', () => {
    assert.equal(operations.tree(Prodcuts).length, 2);
})

it('Product Set A - 1st Product item_count must be 3', () => {
    let products = operations.tree(Prodcuts); 
    assert.equal(products[0].item_count, 3);
})

it('Product Set A - 1st Product subgroups must be an Array', () => {
    let products = operations.tree(Prodcuts); 
    assert.equal(Array.isArray(products[0].subgroups), true);
})

it('Product Set A - 1st Product subgroups must be length 2', () => {
    let products = operations.tree(Prodcuts); 
    assert.equal(products[0].subgroups.length, 2);
})