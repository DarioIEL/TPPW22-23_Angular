export class Server{
  nome: String;
  descrizione: String;
  tipo?: String;

  constructor(nome: String, descrizione: String, tipo?: String){
    this.nome = nome;
    this.descrizione = descrizione;
    this.tipo = tipo;
  }
}
