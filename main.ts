import { Cliente } from './classes/Cliente'
import { Prodotto } from './classes/Prodotto'
import { ProcessoProduzione } from './classes/ProcessoProduzione'

const cliente1 = new Cliente('cliente1', 'test', 'test@test.com', 'contanti')
const prodotto1 = new Prodotto(1, 'costume', 'M', 'blu', true)
const processo1= new ProcessoProduzione('prod. costumi', 'produzione costumi', [prodotto1])
cliente1.ordinaProdotto(prodotto1)
prodotto1.assegnaCLiente(cliente1)
processo1.prodotti = []