import { IProdotto } from './IProdotto'


export interface IProcessoProduzione {
  nome: string
  descrizione: string
  prodotti: IProdotto []
}