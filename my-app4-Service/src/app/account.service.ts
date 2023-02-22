import { Injectable } from '@angular/core';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts: Account[] = [
    new Account("Stella98", "Base"),
    new Account("Chicco84", "Admin"),
    new Account("Truzzo89", "Hidden")
  ];

  aggiungiAccount(nome: string, status: string){
    this.accounts.push(new Account(nome, status));
    console.log(this.accounts);

  }

  modificaStatus(id: number, status: string){
    this.accounts[id].status = status;
  }

  constructor() { }
}
