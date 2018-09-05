const chai = require('chai');
const expect = chai.expect;
const index = require('../index.js');
const validar = index.cardValidator ;
 
 
describe('cardValidator()', function() {
 
    it('Quando não tiver parametro deve retornar Error', () => {
      expect(() => (validar(""))).to.throw(Error);
    })
    it('Quando for string deve retornar Error', () => {
      expect(() => (validar("ssss"))).to.throw(Error);
 
    })
    it('Quando for string deve retornar Error', () => {
      expect(() => (validar("12ssss"))).to.throw(Error);
 
    })
    it('Quando tiver um dígito deve retornar Error', () => {
      expect(() => (validar(1))).to.throw(Error);
    })
  
 
    it('Quando o número do cartão for válido de retornar true', () => {
        expect(validar(36490102462661)).to.equal(true);
    })
    it('Quando o número do cartão for inválido de retornar false', () => {
        expect(validar(4916323021872655)).to.equal(false);
    })

});