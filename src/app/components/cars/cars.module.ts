import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsComponent} from './cars.component';
import {TransportationCardModule} from '../transportation-card/transportation-card.module';

@NgModule({
    imports: [CommonModule, TransportationCardModule],
    declarations: [CarsComponent],
    exports: [CarsComponent]
})
export class CarsModule {
    constructor(){}
}