import { ICliente } from '../interfaces/ICliente';
import { IProdotto } from '../interfaces/IProdotto'


export class Prodotto implements IProdotto {
  id: number
  tipo: string
  taglia: string
  colore: string
  stato: boolean

  constructor(id: number, tipo: string, taglia: string, colore: string, stato: boolean) {
    this.id = id
    this.tipo = tipo
    this.taglia = taglia
    this.colore = colore
    this.stato = stato
  }

  assegnaCLiente(cliente: ICliente): void {
    
  }
}