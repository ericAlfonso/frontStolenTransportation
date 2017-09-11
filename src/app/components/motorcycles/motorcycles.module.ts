import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MotorcyclesComponent} from './motorcycles.component';
import {TransportationCardModule} from '../transportation-card/transportation-card.module';

@NgModule({
    imports: [CommonModule, TransportationCardModule],
    declarations: [MotorcyclesComponent],
    exports: [MotorcyclesComponent]
})
export class MotorcyclesModule {
    constructor(){}
}