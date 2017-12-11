import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LunchComponent } from '../components/lunch/lunch.component';
import { ClientComponent } from '../components/client/client.component';
import { UserComponent } from '../components/user/user.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: 'lunch', component: LunchComponent },
  { path: 'client', component: ClientComponent },
  { path: 'user', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
