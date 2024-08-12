"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _Cliente = void 0;
//export { _Cliente as Cliente };
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        if (prodotto.stato) {
            prodotto.stato = false;
            console.log("Prodotto ".concat(prodotto.tipo, " ordinato"));
        }
        else {
            console.log("".concat(prodotto.tipo, " non disponibile"));
        }
    };
    return Cliente;
}());
_Cliente = Cliente;
export { _Cliente as Cliente };
