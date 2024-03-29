import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HompageComponent,
   NotfoundComponent,
    AuthComponent,
    MenuComponent,
   LocationComponent,
   OrderComponent,
   FooterComponent, 
    ReservationComponent} from './shared';


import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    NotfoundComponent,
    AuthComponent,
    MenuComponent,
    LocationComponent,
    OrderComponent,
    FooterComponent,
    ReservationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
