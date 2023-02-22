import { Component } from '@angular/core';
import { Account } from './account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app3-PreService';

  listaAccount: Account[] = [
    new Account("Prova", "Active")
  ]

  onAggiungiAccount(account: Account){
    console.log("Dal form ho ricevuto: " + account.nome + " " + account.status);

    this.listaAccount.push(account);

    console.log(this.listaAccount);
  }

  onChangeStatus(nuoveInfo){
    console.log(nuoveInfo);
    this.listaAccount[nuoveInfo.id].status = nuoveInfo.newStatus;
  }

  nomeRicevutoOutput: string;

  onRegistraNome(nomeRicevuto: string){
    console.log(nomeRicevuto);
    this.nomeRicevutoOutput = nomeRicevuto;
  }
}
