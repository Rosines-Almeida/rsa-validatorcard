const numberCard = {};

exports.validateData = function(numberCard) {  
      if (numberCard !== "" && Number.isInteger(parseInt(numberCard))) {
        return true;
    } else {
      return false;
    }
}
exports.checkLuhn = function (numberCard) {
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
}

//    module.exports = validateData;
//    module.exports = checkLuhn;