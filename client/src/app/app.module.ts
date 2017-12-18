// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule  } from 'angular2-flash-messages';
import { JwtModule } from '@auth0/angular-jwt'

// Routing Modules
import { AppRoutingModule } from './routes/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



// Material Modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

// Services
import { ClientService } from './services/client/client.service';
import { RegisterService } from './services/register/register.service';
import { ValidationService } from './services/validation/validation.service';
import { AuthService } from './services/auth/auth.service';


// Components
import { AppComponent } from './components/app/app.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { ClientComponent } from './components/client/client.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';

@NgModule({
  // Put components here!
  declarations: [
    AppComponent,
    LunchComponent,
    ClientComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    EditClientComponent
  ],
  // Module Imports here
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    HttpModule,
    MatTableModule,
    MatDialogModule,
    FlashMessagesModule.forRoot(),
    JwtModule.forRoot({
     config: {
       tokenGetter: () => {
         return localStorage.getItem('id_token');
       },
       whitelistedDomains: ['http://localhost:3000']
     }
   })
  ],
  // Add Services here
  providers: [
    ClientService,
    RegisterService,
    ValidationService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
