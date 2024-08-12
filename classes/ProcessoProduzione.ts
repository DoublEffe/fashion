import { IProcessoProduzione } from "../interfaces/IProcessoProduzione";
import { Prodotto } from "./Prodotto";

export class ProcessoProduzione implements IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodotti: Prodotto [];

  constructor(nome: string, descrizione: string, prodotti: Prodotto []) {
    this.nome = nome
    this.descrizione = descrizione
    this.prodotti = prodotti
  }
}