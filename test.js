const operations = require('./tree.js')
const assert = require('assert')

let products_setA = [
	{ "group": "G1", "subgroup": "S1", "item": "I1", "cost": 10 },
	{ "group": "G1", "subgroup": "S2", "item": "I2", "cost": 11 },
	{ "group": "G1", "subgroup": "S2", "item": "I3", "cost": 12 },
	{ "group": "G2", "subgroup": "S1", "item": "I4", "cost": 20 }
]

it('Product Set A - must be an Array', () => {
 let products = operations.tree(products_setA);    
  assert.equal(Array.isArray(products), true);
})


it('Product Set A - Length must be 2', () => {
    assert.equal(operations.tree(products_setA).length, 2);
})

it('Product Set A - 1st Product item_count must be 3', () => {
    let products = operations.tree(products_setA); 
    assert.equal(products[0].item_count, 3);
})

it('Product Set A - 1st Product subgroups must be an Array', () => {
    let products = operations.tree(products_setA); 
    assert.equal(Array.isArray(products[0].subgroups), true);
})

it('Product Set A - 1st Product subgroups must be length 2', () => {
    let products = operations.tree(products_setA); 
    assert.equal(products[0].subgroups.length, 2);
})