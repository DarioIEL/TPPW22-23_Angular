import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './lista-account/account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { FormsModule } from '@angular/forms';
import { ListaAccountComponent } from './lista-account/lista-account.component';

@NgModule({
  declarations: [
    AppComponent,

    AccountComponent,
    NewAccountComponent,
    ListaAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
