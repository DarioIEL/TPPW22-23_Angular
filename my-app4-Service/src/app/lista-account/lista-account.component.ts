import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-lista-account',
  templateUrl: './lista-account.component.html',
  styleUrls: ['./lista-account.component.css']
})
export class ListaAccountComponent implements OnInit {

accounts: Account[] = []

  constructor(private accSer: AccountService){

  }

  ngOnInit(): void {
    this.accounts = this.accSer.accounts;
    // console.log("Questi sono gli account della lista", this.accounts);
  }

  onChangeStatus(index: number, status: string){
    this.accSer.modificaStatus(index, status);
  }


}
