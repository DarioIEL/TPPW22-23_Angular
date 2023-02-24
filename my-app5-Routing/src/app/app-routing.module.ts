import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

//In questo array definisco le rotte. Ogni rotta è un oggetto JS
const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:nome', component: UserComponent}
  ]},


  {path: 'servers', component: ServersComponent},

  {path: 'not-found', component: PageNotFoundComponent}, //per poter chiamare il not-found quando la rotta non è corretta utilizzo la WILDCARD
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
