 
   
module.exports.cardValidator = function cardValidator(numberCard) {
    if (!numberCard) {
        throw new Error("Não há parametro");
    }
    if (typeof numberCard === "string") {
        throw new Error("O texto dígitado é uma string");
    }
    if (numberCard.toString().length < 10) {
        throw new Error("Números digitados menor do que o permetido");
    }
    else {
        var suma = 0, digit = false;
        var numberCard = String(numberCard).split("").reverse().forEach(function(numdigits ){ d = parseInt(numdigits);
            suma += ((digit = !digit) ? d : (d < 5) ? d * 2 : (d - 5) * 2 + 1);
        });
        return (suma % 10 == 0);
    }
};
        
    