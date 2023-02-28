import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //per poter utilizzare i metodi del CRUD devo iniettare HttpClient
  constructor(private http: HttpClient) { }

  url = "http://localhost:3000"; //json-server comunica qui

  getData(){
    let utenti = this.http.get(`${this.url}/utenti`)
    console.log("Dal service", utenti);
    return utenti;
  }


  postaData(utenza){
    return this.http.post(this.url + '/utenti', utenza);
  }
}
