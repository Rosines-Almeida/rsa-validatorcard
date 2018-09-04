const chai = require('chai');
const expect = chai.expect;
const index = require('../index.js');
const validar = index.cardValidator ;
//  const luhn = cardValidator.checkLuhn;
 
describe('cardValidator ()', function() {
 
    it('validar se não tem parametro ou é um string', () => {
      expect(validar('aaasssssss')).to.equal(false);
    })
    it('validar se não tem parametro ou é um string', () => {
      expect(validar('aaasssssss')).to.equal(false);
      // expect(validar('12dasa334d')).to.equal(false);
    })
    it('validar se não tem parametro ou é um string', () => {
      expect(validar('')).to.equal(false);
    })
    it('validar se não tem parametro ou é um string', () => {
      expect(validar('1')).to.equal(false);
    })
    it('validar se não tem parametro ou é um string', () => {
      expect(validar('1234567890')).to.equal(false);
    //   
    });
 
    it('validar algoritmo de Luhn', () => {
        expect(validar('4916323026380999')).to.equal(true);
    })
    it('validar algoritmo de Luhn', () => {
        expect(validar('4916323021872655')).to.equal(false);
    })
    it('validar algoritmo de Luhn', () => {
        expect(validar('36490102462661')).to.equal(true);
    })
    it('validar algoritmo de Luhn', () => {
        expect(validar('1234567890')).to.equal(true);
    })
    it('validar algoritmo de Luhn', () => {
        expect(validar('49927398716')).to.equal(true);
        
});
});