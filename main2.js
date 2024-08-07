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
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nome, descrizione, prodotti) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.prodotti = prodotti;
    }
    return ProcessoProduzione;
}());
//clineti
var cliente1 = new Cliente('Mario', 'Rossi', 'mario@rossi.com', 'contanti');
var cliente2 = new Cliente('Irene', 'Bianchi', 'irene@bianchi.com', 'carta di credito');
var cliente3 = new Cliente('Elsia', 'Verdi', 'elisa@verdi.com', 'carta di credito');
//prodotti
var vestito = new Prodotto(1, 'vestito', 'M', 'blu', true);
var scarpe = new Prodotto(1, 'scarpe', '40', 'bianche', true);
var costume = new Prodotto(1, 'costume', 'X', 'verde', true);
//aziende produttrici
var processo1 = new ProcessoProduzione('LookBook', 'Creare un modello di consumo sostenibile e fare divulgazione del riuso come atto d’amore verso l’ambiente.', [vestito]);
var processo2 = new ProcessoProduzione('Demetra', 'Creare calzature di qualità rispettando l’ambiente e utilizzando materiali organici, senza dover rinunciare alle prestazioni e alla comodità.', [scarpe]);
var processo3 = new ProcessoProduzione('Sunnee', 'Creare una filiera produttiva sostenibile, etica e rigenerativa per ogni linea di costumi.', [costume]);
cliente1.ordinaProdotto(vestito);
vestito.assegnaCLiente(cliente1);
cliente2.ordinaProdotto(vestito);
//aggiunta nuovo prodotto
var vestito1 = new Prodotto(2, 'vestito1', 'S', 'bianco', true);
processo1.prodotti.push(vestito1);
cliente2.ordinaProdotto(vestito1);
vestito1.assegnaCLiente(cliente2);
cliente3.ordinaProdotto(scarpe);
scarpe.assegnaCLiente(cliente3);
