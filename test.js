const {tree} = require('./tree.js'); //Solution A
const {groups} =require('./groups.js'); //Solution B
const assert = require('assert')
const {Prodcuts, Computers} = require('./dataset');

//Sollution A
describe("Solution A: Tree",()=>{

    const products = tree(Prodcuts); 
    const computers = tree(Computers);

    describe("Data Set A : Prodcuts",()=>{
        it('Product - must be an Array', () => {
            assert.equal(Array.isArray(products), true);
        })

        it('Product - Length must be 2', () => {
            assert.equal(products.length, 2);
        })

        it('Product - 1st Product item_count must be 3', () => {
            assert.equal(products[0].item_count, 3);
        })

        it('Product - 1st Product subgroups must be an Array', () => {
            assert.equal(Array.isArray(products[0].subgroups), true);
        })

        it('Product - 1st Product subgroups must be length 2', () => {
            assert.equal(products[0].subgroups.length, 2);
        })
    });

    describe("Data Set B : Computers",()=>{

    
        it('Computers - must be an Array', () => {
            assert.equal(Array.isArray(computers), true);
        })

        it('Computers - Length must be 2', () => {
            assert.equal(computers.length, 2);
        })

        it('Computers - 1st Product item_count must be 2', () => {
            assert.equal(computers[0].item_count, 4);
        })

        it('Computers - 1st Product subgroups must be an Array', () => {
            assert.equal(Array.isArray(computers[0].subgroups), true);
        })

        it('Computers - 1st Product subgroups must be length 2', () => {
            assert.equal(computers[0].subgroups.length, 2);
        })
    });

});

//Sollution B
describe("Solution B: Groups",()=>{

    const products = groups(Prodcuts); 
    const computers = groups(Computers);

    describe("Data Set A : Prodcuts",()=>{
        it('Product - must be an Array', () => {
            assert.equal(Array.isArray(products), true);
        })

        it('Product - Length must be 2', () => {
            assert.equal(products.length, 2);
        })

        it('Product - 1st Product item_count must be 3', () => {
            assert.equal(products[0].item_count, 3);
        })

        it('Product - 1st Product subgroups must be an Array', () => {
            assert.equal(Array.isArray(products[0].subgroups), true);
        })

        it('Product - 1st Product subgroups must be length 2', () => {
            assert.equal(products[0].subgroups.length, 2);
        })
    });

    describe("Data Set B : Computers",()=>{

    
        it('Computers - must be an Array', () => {
            assert.equal(Array.isArray(computers), true);
        })

        it('Computers - Length must be 2', () => {
            assert.equal(computers.length, 2);
        })

        it('Computers - 1st Product item_count must be 2', () => {
            assert.equal(computers[0].item_count, 4);
        })

        it('Computers - 1st Product subgroups must be an Array', () => {
            assert.equal(Array.isArray(computers[0].subgroups), true);
        })

        it('Computers - 1st Product subgroups must be length 2', () => {
            assert.equal(computers[0].subgroups.length, 2);
        })
    });

});

