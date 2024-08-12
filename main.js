"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
import { Cliente } from "./classes/Cliente.js";
import { Prodotto } from "./classes/Prodotto.js";
import { ProcessoProduzione } from "./classes/ProcessoProduzione.js";
/*
//clineti
const cliente1 = new Cliente('Mario', 'Rossi', 'mario@rossi.com', 'contanti')
const cliente2 = new Cliente('Irene', 'Bianchi', 'irene@bianchi.com', 'carta di credito')
const cliente3 = new Cliente('Elsia', 'Verdi', 'elisa@verdi.com', 'carta di credito')

//prodotti
const vestito = new Prodotto(1, 'vestito', 'M', 'blu', true)
const scarpe = new Prodotto(1, 'scarpe', '40', 'bianche', true)
const costume = new Prodotto(1, 'costume', 'X', 'verde', true)


//aziende produttrici
const processo1= new ProcessoProduzione('LookBook', 'Creare un modello di consumo sostenibile e fare divulgazione del riuso come atto d’amore verso l’ambiente.', [vestito])
const processo2= new ProcessoProduzione('Demetra', 'Creare calzature di qualità rispettando l’ambiente e utilizzando materiali organici, senza dover rinunciare alle prestazioni e alla comodità.', [scarpe])
const processo3= new ProcessoProduzione('Sunnee', 'Creare una filiera produttiva sostenibile, etica e rigenerativa per ogni linea di costumi.', [costume])

cliente1.ordinaProdotto(vestito)
vestito.assegnaCLiente(cliente1)
cliente2.ordinaProdotto(vestito)

//aggiunta nuovo prodotto
const vestito1 = new Prodotto(2, 'vestito1', 'S', 'bianco', true)
processo1.prodotti.push(vestito1)

cliente2.ordinaProdotto(vestito1)
vestito1.assegnaCLiente(cliente2)
cliente3.ordinaProdotto(scarpe)
scarpe.assegnaCLiente(cliente3)*/
//file reader
var reader = function (file) {
    return new Promise(function (resolve, reject) {
        var fr = new FileReader();
        fr.onload = function () { return resolve(fr); };
        fr.onerror = function (err) { return reject(err); };
        fr.readAsText(file);
    });
};
var clientsInput = document.getElementById('clients');
var productsInput = document.getElementById('products');
var div = document.getElementById('div');
var clients = [];
var products = [];
var orders = [];
//putting files in the variables
div.addEventListener('change', function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var file, frPromises, fileReader, fileContent, actualProductsVestiti, actualProductsScarpe, actualProductsCostumi, vestiti, scarpe, costumi, _i, vestiti_1, product, _a, scarpe_1, product, _b, costumi_1, product, processo1, processo2, processo3, _loop_1, _c, orders_1, order;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!event.target) {
                    return [2 /*return*/];
                }
                file = event.target.files[0];
                if (!file) return [3 /*break*/, 2];
                frPromises = reader(file);
                return [4 /*yield*/, Promise.resolve(frPromises)];
            case 1:
                fileReader = _d.sent();
                fileContent = JSON.parse(fileReader.result);
                if (event.target.getAttribute('id') === 'clients') {
                    clients = fileContent;
                }
                else if (event.target.getAttribute('id') === 'products') {
                    products = fileContent;
                }
                else {
                    orders = fileContent;
                }
                _d.label = 2;
            case 2:
                actualProductsVestiti = [];
                actualProductsScarpe = [];
                actualProductsCostumi = [];
                if (orders.length > 0) {
                    vestiti = products[0]['vestiti'];
                    scarpe = products[1]['scarpe'];
                    costumi = products[2]['costumi'];
                    for (_i = 0, vestiti_1 = vestiti; _i < vestiti_1.length; _i++) {
                        product = vestiti_1[_i];
                        actualProductsVestiti.push(new Prodotto(product.id, product.tipo, product.taglia, product.colore, product.stato));
                    }
                    for (_a = 0, scarpe_1 = scarpe; _a < scarpe_1.length; _a++) {
                        product = scarpe_1[_a];
                        actualProductsScarpe.push(new Prodotto(product.id, product.tipo, product.taglia, product.colore, product.stato));
                    }
                    for (_b = 0, costumi_1 = costumi; _b < costumi_1.length; _b++) {
                        product = costumi_1[_b];
                        actualProductsCostumi.push(new Prodotto(product.id, product.tipo, product.taglia, product.colore, product.stato));
                    }
                    clients = clients.map(function (client) { return new Cliente(client.nome, client.cognome, client.email, client.metodoPagamento); });
                    processo1 = new ProcessoProduzione('LookBook', 'Creare un modello di consumo sostenibile e fare divulgazione del riuso come atto d’amore verso l’ambiente.', actualProductsVestiti);
                    processo2 = new ProcessoProduzione('Demetra', 'Creare calzature di qualità rispettando l’ambiente e utilizzando materiali organici, senza dover rinunciare alle prestazioni e alla comodità.', actualProductsScarpe);
                    processo3 = new ProcessoProduzione('Sunnee', 'Creare una filiera produttiva sostenibile, etica e rigenerativa per ogni linea di costumi.', actualProductsCostumi);
                    _loop_1 = function (order) {
                        var client = clients.find(function (client) { return client.nome === order['client']; });
                        var orderedProduct = actualProductsVestiti.find(function (product) { return product.id === order['order'][1] && 'vestiti' === order['order'][0]; });
                        if (orderedProduct && client) {
                            client.ordinaProdotto(orderedProduct);
                            orderedProduct.assegnaCLiente(client);
                        }
                        orderedProduct = actualProductsScarpe.find(function (product) { return product.id === order['order'][1] && 'scarpe' === order['order'][0]; });
                        if (orderedProduct && client) {
                            client.ordinaProdotto(orderedProduct);
                            orderedProduct.assegnaCLiente(client);
                        }
                        orderedProduct = actualProductsCostumi.find(function (product) { return product.id === order['order'][1] && 'costumi' === order['order'][0]; });
                        if (orderedProduct && client) {
                            client.ordinaProdotto(orderedProduct);
                            orderedProduct.assegnaCLiente(client);
                        }
                    };
                    //instantiation clients and making orders and association of client and product
                    for (_c = 0, orders_1 = orders; _c < orders_1.length; _c++) {
                        order = orders_1[_c];
                        _loop_1(order);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
