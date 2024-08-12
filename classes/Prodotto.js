"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _Prodotto = void 0;
//export { _Prodotto as Prodotto };
var Prodotto = /** @class */ (function () {
    function Prodotto(id, tipo, taglia, colore, stato) {
        this.id = id;
        this.tipo = tipo;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    Prodotto.prototype.assegnaCLiente = function (cliente) {
        console.log("Il prodotto ".concat(this.id, " \u00E8 stato assegnato ad ").concat(cliente.email));
    };
    return Prodotto;
}());
_Prodotto = Prodotto;
export { _Prodotto as Prodotto };
