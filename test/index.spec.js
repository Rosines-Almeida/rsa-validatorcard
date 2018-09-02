const chai = require('chai');
const cardValidator = require ('../index.js');
const expect = chai.expect;
const validar = cardValidator.validateData;
 const luhn = cardValidator.checkLuhn;
 
describe('cardValidator()', function() {
 
    it('validar se não tem parametro ou é um string', () => {
      expect(validar('aaasssssss')).to.equal(false);
    //   expect(validar('12dasa334d')).to.equal(false);
      expect(validar('')).to.equal(false);
      expect(validar('1234567890')).to.equal(true);
    //   expect(cardValidator('12')).to.equal(false);
    });
 
    it('validar algoritmo de Luhn', () => {
        expect(luhn('4916323026380999')).to.equal(true);
        expect(luhn('4916323021872655')).to.equal(false);
        expect(luhn('36490102462661')).to.equal(true);
        // expect(luhn('1234567890')).to.equal(true);
        expect(luhn('49927398716')).to.equal(true);
        
});
});