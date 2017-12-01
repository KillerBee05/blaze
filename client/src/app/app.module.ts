// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing Modules
import { AppRoutingModule }     from './routes/app-routing.module';
import { RouterModule }   from '@angular/router';

// Material Modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdDatepickerModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdButtonToggleModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTableModule} from '@angular/material/table';

// Services
import { ClientService } from './services/client.service';


// Components
import { AppComponent } from './components/app/app.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { ClientComponent } from './components/client/client.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  // Put components here!
  declarations: [
    AppComponent,
    LunchComponent,
    ClientComponent,
    UserComponent
  ],
  // Module Imports here
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonToggleModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    FlexLayoutModule,
    HttpModule,
    MatTableModule

  ],
  // Add Services here
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
