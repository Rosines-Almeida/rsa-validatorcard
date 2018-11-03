# rsa-validatorcard
 

<p> Biblioteca que valida cartão de crédito, se o cartão for válido retorna true e se for inválido retorna false, e quando for parametros que não são aceitos retorna mensagem de erro. </p>

 ## Os métodos utilizados na biblioteca são:

#### **cardValidator;**

Exemplo de uso:
```
$node
> card = require ('rsa-validatorcard')//{ cardValidator: [Function: cardValidator] }
> card.cardValidator('test'); // 'O texto digitado é uma string'
```
## Versão 1.0.2
- funcionalidades: validar o número do cartão de crédito;
- Aplica mensagem de Error quando for string, não tiver parametro e tiver um dígito. 
 

 
 ## Instalação 

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install rsa-validatorcard`

## Roadmap oficial do projeto

#### Versão 3.0.0 (sem previsão, aceita-se contribuições)
- README translated to english;
 

#### Versão 2.0.0 (previsão outubro/2018)
- Validar bandeiras do cartão de crédtito;
- Validar nome do titular do cartão de crédito;
- Validar CVV;
 


 


 

 
