import { ICliente } from "../interfaces/ICliente";
import { IProdotto } from "../interfaces/IProdotto";


export class Cliente implements ICliente {
  nome: string
  cognome: string
  email: string
  metodoPagamento: string

  constructor(nome: string, cognome: string, email: string, metodoPagamento: string) {
    this.nome = nome
    this.cognome = cognome
    this.email = email
    this.metodoPagamento = metodoPagamento
  }

  ordinaProdotto(prodotto: IProdotto): void {
    if(prodotto.stato) {
      console.log(`Prodotto ${prodotto.tipo} ordinato`)
    }
    else {
      console.log(`${prodotto.tipo} non disponibile`)
    }
  }
  
}