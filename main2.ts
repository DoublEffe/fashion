interface ICliente {
  nome: string
  cognome: string
  email: string
  metodoPagamento: string

  ordinaProdotto(prodotto: IProdotto): void
}

interface IProdotto {
  id: number
  tipo: string
  taglia: string
  colore: string
  stato: boolean

  assegnaCLiente(cliente: ICliente): void
}

interface IProcessoProduzione {
  nome: string
  descrizione: string
  prodotti: IProdotto []
}

class Cliente implements ICliente {
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
      prodotto.stato = false
      console.log(`Prodotto ${prodotto.tipo} ordinato`)
    }
    else {
      console.log(`${prodotto.tipo} non disponibile`)
    }
  }
  
}

class Prodotto implements IProdotto {
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
    console.log(`Il prodotto ${this.id} è stato assegnato ad ${cliente.email}`)
  }
}

class ProcessoProduzione implements IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodotti: IProdotto[];

  constructor(nome: string, descrizione: string, prodotti: Prodotto []) {
    this.nome = nome
    this.descrizione = descrizione
    this.prodotti = prodotti
  }
}

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
scarpe.assegnaCLiente(cliente3)
