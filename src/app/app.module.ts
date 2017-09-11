import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StolenTransportationModule} from './components/stolen-transportation/stolen-transportation.module';
import {CarsModule} from './components/cars/cars.module';
import {MotorcyclesModule} from './components/motorcycles/motorcycles.module';
import {SelectionModule} from './components/selection/selection.module';
import {TransportationCardModule} from './components/transportation-card/transportation-card.module';
import {RouterModule} from '@angular/router';
import {Routes} from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StolenTransportationModule,
    CarsModule,
    MotorcyclesModule,
    SelectionModule,
    TransportationCardModule,
    RouterModule.forRoot(Routes, {useHash: true})
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
