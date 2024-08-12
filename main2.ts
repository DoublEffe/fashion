

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
    if(this.stato) {
      this.stato = false
      console.log(`Il prodotto ${this.id} del tipo ${this.tipo} è stato assegnato ad ${cliente.email}`)
    }
    else {
      console.log(`impossibile assegnare cliente ${this.tipo} non disponibile`)
    }
  }
}

class ProcessoProduzione implements IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodotti: Prodotto[];

  constructor(nome: string, descrizione: string, prodotti: Prodotto []) {
    this.nome = nome
    this.descrizione = descrizione
    this.prodotti = prodotti
  }
}
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
const reader = (file: File) =>
  new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr);
    fr.onerror = (err) => reject(err);
    fr.readAsText(file);
  });

const clientsInput = document.getElementById('clients') as HTMLInputElement;
const productsInput = document.getElementById('products') as HTMLInputElement;
const div = document.getElementById('div')
var clients: Cliente [] = []
var products = []
var orders = []

//putting files in the variables
div!.addEventListener('change', async (event) => {
  if(!event.target){return}
  const file = (event.target as HTMLInputElement).files![0];
  if (file) {
    const frPromises = reader(file)
    const fileReader = await Promise.resolve(frPromises) as FileReader
    const fileContent = JSON.parse(fileReader.result as string)
    if((event.target as HTMLElement).getAttribute('id') === 'clients') {
      clients = fileContent
    }
    else if ((event.target as HTMLElement).getAttribute('id') === 'products') {
      products = fileContent
    }
    else {
      orders = fileContent
    }
  }


  //instantiation of  products and production process
  var actualProductsVestiti: Prodotto [] = []
  var actualProductsScarpe: Prodotto [] = []
  var actualProductsCostumi: Prodotto [] = []
  if(orders.length > 0) {
    let vestiti: Prodotto [] = products[0]['vestiti']
    let scarpe: Prodotto [] = products[1]['scarpe']
    let costumi: Prodotto [] = products[2]['costumi']
    for (let product of vestiti) {
      actualProductsVestiti.push(new Prodotto(product.id, product.tipo, product.taglia, product.colore, product.stato))
    }
    for (let product of scarpe) {
      actualProductsScarpe.push(new Prodotto(product.id, product.tipo, product.taglia, product.colore, product.stato))
    }
    for (let product of costumi) {
      actualProductsCostumi.push(new Prodotto(product.id, product.tipo, product.taglia, product.colore, product.stato))
    }
    clients = clients.map((client: Cliente) => new Cliente(client.nome, client.cognome, client.email, client.metodoPagamento))
    const processo1= new ProcessoProduzione('LookBook', 'Creare un modello di consumo sostenibile e fare divulgazione del riuso come atto d’amore verso l’ambiente.', actualProductsVestiti)
    const processo2= new ProcessoProduzione('Demetra', 'Creare calzature di qualità rispettando l’ambiente e utilizzando materiali organici, senza dover rinunciare alle prestazioni e alla comodità.', actualProductsScarpe)
    const processo3= new ProcessoProduzione('Sunnee', 'Creare una filiera produttiva sostenibile, etica e rigenerativa per ogni linea di costumi.', actualProductsCostumi)
    
    //instantiation clients and making orders and association of client and product
    for( let order of orders) {
      let client: Cliente | undefined = clients.find((client: Cliente) => client.nome === order['client'])
      let orderedProduct = actualProductsVestiti.find(product => product.id === order['order'][1] && 'vestiti' === order['order'][0])
      if(orderedProduct && client) {
        client.ordinaProdotto(orderedProduct)
        orderedProduct.assegnaCLiente(client)
      }
      orderedProduct = actualProductsScarpe.find(product => product.id === order['order'][1] && 'scarpe' === order['order'][0])
      if(orderedProduct && client) {
        client.ordinaProdotto(orderedProduct)
        orderedProduct.assegnaCLiente(client)
      }
      orderedProduct = actualProductsCostumi.find(product => product.id === order['order'][1] && 'costumi' === order['order'][0])
      if(orderedProduct && client) {
        client.ordinaProdotto(orderedProduct)
        orderedProduct.assegnaCLiente(client)
      }
    }

  }
})
