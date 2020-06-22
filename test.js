const {tree} = require('./tree.js'); //Solution A
const {groups} =require('./groups.js'); //Solution B
const assert = require('assert')
const {Prodcuts_setA, Prodcuts_setB} = require('./dataset');

//Sollution A
describe("Solution A: Tree",()=>{

    describe("Data Set A : Prodcuts Data Set",()=>{
        const products = tree(Prodcuts_setA); 

        it('Should have an Array', () => {
            assert.equal(Array.isArray(Prodcuts_setA), true);
        })

        it('Should have total 2 Groups', () => {
            assert.equal(products.length, 2);
        })

        it('Should have total 2 Subgroups of 1st Groups', () => {
            assert.equal(products[0].subgroups.length, 2);
        })

        it('Should have total 3 Items of 1st Groups', () => {
            assert.equal(products[0].item_count, 3);
        })

        it('Should have group name as G1 of 1st Groups', () => {
            assert.equal(products[0].group, "G1");
        })
    
    });

    describe("Data Set B : Prodcuts Data Set",()=>{
        const products = tree(Prodcuts_setB); 
        
        it('Should have an Array', () => {
            assert.equal(Array.isArray(Prodcuts_setB), true);
        })

        it('Should have total 1 Groups', () => {
            assert.equal(products.length, 1);
        })

        it('Should have total 1 Subgroups of 1st Groups', () => {
            assert.equal(products[0].subgroups.length, 1);
        })

        it('Should have total 1 Items of 1st Groups', () => {
            assert.equal(products[0].item_count, 2);
        })

        it('Should have group name as G2 of 1st Groups', () => {
            assert.equal(products[0].group, "G2");
        })
    
    });
});


//Solutions B
describe("Solution B: GroupsBy",()=>{

    describe("Data Set A : Prodcuts Data Set",()=>{
        const products = groups(Prodcuts_setA); 

        it('Should have an Array', () => {
            assert.equal(Array.isArray(Prodcuts_setA), true);
        })

        it('Should have total 2 Groups', () => {
            assert.equal(products.length, 2);
        })

        it('Should have total 2 Subgroups of 1st Groups', () => {
            assert.equal(products[0].subgroups.length, 2);
        })

        it('Should have total 3 Items of 1st Groups', () => {
            assert.equal(products[0].item_count, 3);
        })

        it('Should have group name as G1 of 1st Groups', () => {
            assert.equal(products[0].group, "G1");
        })
    
    });

    describe("Data Set B : Prodcuts Data Set",()=>{
        const products = groups(Prodcuts_setB); 
        
        it('Should have an Array', () => {
            assert.equal(Array.isArray(Prodcuts_setB), true);
        })

        it('Should have total 1 Groups', () => {
            assert.equal(products.length, 1);
        })

        it('Should have total 1 Subgroups of 1st Groups', () => {
            assert.equal(products[0].subgroups.length, 1);
        })

        it('Should have total 1 Items of 1st Groups', () => {
            assert.equal(products[0].item_count, 2);
        })

        it('Should have group name as G2 of 1st Groups', () => {
            assert.equal(products[0].group, "G2");
        })
    
    });
});

