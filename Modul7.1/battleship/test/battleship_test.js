const expect = require('chai').expect;

describe('checkForShip', ()=>{

    const checkForShip = require('../game_logic/ship_methods').checkForShip;

    const player ={
        ships: [
            {
                locations: [[0,0]]
            }
        ]        
    };

    it("should correctly report no ship at a given players coordinate", ()=>{
        expect(checkForShip(player, [9,9])).to.be.false;
    });

})