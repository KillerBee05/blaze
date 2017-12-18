import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


import { LunchComponent } from '../components/lunch/lunch.component';
import { ClientComponent } from '../components/client/client.component';
import { UserComponent } from '../components/user/user.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { EditClientComponent } from '../components/edit-client/edit-client.component';
import { AddClientComponent } from '../components/add-client/add-client.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'lunch', component: LunchComponent, canActivate:[AuthGuard] },
  { path: 'client', component: ClientComponent, canActivate:[AuthGuard] },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-client', component: EditClientComponent },
  { path: 'add-client', component: AddClientComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
