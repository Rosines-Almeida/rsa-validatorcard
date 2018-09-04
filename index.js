const numberCard = {};

module.exports.cardValidator  = function cardValidator  (numberCard) {  
      if (numberCard !== "" && Number.isInteger(parseInt(numberCard))) {
        var sum = 0;
        var numdigits = numberCard.length;
        var parity = numdigits % 2;
        for(var i=0; i < numdigits; i++) {
          var digit = parseInt(numberCard.charAt(i))
          if(i % 2 == parity) digit *= 2;
          if(digit > 9) digit -= 9;
          sum += digit;
        }
        return (sum % 10) == 0;
    if(total % 10 === 0){
        if (suma === 0) {
            return true;
          } else {
            return false;
          }
        };
    } else {
      return false;s
    }
}
// exports.checkLuhn = function (numberCard) {
   
 

//    module.exports = validateData;
//    module.exports = checkLuhn;