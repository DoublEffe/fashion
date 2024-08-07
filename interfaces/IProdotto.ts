import { ICliente } from './ICliente'


export interface IProdotto {
  id: number
  tipo: string
  taglia: string
  colore: string
  stato: boolean

  assegnaCLiente(cliente: ICliente): void
}