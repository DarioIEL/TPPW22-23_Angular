export class Studente{
  public nome: String;
  public cognome: String;
  public matricola: String;

  constructor(nome: string, cognome: string, matricola: string){
    this.nome = nome;
    this.matricola = matricola;
    this.cognome = cognome;
  }
}
