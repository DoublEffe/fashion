import { IProcessoProduzione } from "../interfaces/IProcessoProduzione";
import { IProdotto } from "../interfaces/IProdotto";
import { Prodotto } from "./Prodotto";

export class ProcessoProduzione implements IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodotti: IProdotto[];

  constructor(nome: string, descrizione: string, prodotti: Prodotto []) {
    this.nome = nome
    this.descrizione = descrizione
    this.prodotti = prodotti
  }
}