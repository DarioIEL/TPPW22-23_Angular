export class Server{
  nome: String;
  descrizione: String;
  tipo?: String;

  constructor(nome: string, descrizione: string, tipo?: string){
    this.nome = nome;
    this.descrizione = descrizione;
    this.tipo = tipo;
  }
}
