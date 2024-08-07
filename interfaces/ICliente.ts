import { IProdotto } from './IProdotto'


export interface ICliente {
  nome: string
  cognome: string
  email: string
  metodoPagamento: string

  ordinaProdotto(prodotto: IProdotto): void
}