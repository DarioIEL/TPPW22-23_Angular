import { Component, Input } from '@angular/core';
import { Account } from 'src/app/account.model';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(private accSer: AccountService) {

  }

  @Input() account: Account;
  @Input() indice: number;


  onChangeStatus(index: number, status: string){
    this.accSer.modificaStatus(index, status);
  }

}
