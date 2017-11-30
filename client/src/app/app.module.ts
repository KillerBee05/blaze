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
import { HeroService } from './services/hero.service';
import { ClientService } from './services/client.service';


// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './components/app/app.component';
import { HeroDetailComponent } from './components/hero-details/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  // Put components here!
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    LunchComponent,
    ClientComponent
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
    HeroService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
