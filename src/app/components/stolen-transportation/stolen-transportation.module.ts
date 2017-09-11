import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoneTransportationComponent} from './stolen-transportation.component';
import {TransportationCardModule} from '../transportation-card/transportation-card.module';
import {RouterModule} from '@angular/router';
import {CarsComponent} from '../cars/cars.component';
import {CarsModule} from '../cars/cars.module';
import {MotorcyclesComponent} from '../motorcycles/motorcycles.component';
import {MotorcyclesModule} from '../motorcycles/motorcycles.module';
import {SelectionComponent} from '../selection/selection.component';
import {SelectionModule} from '../selection/selection.module';

export const routes = [{
    path: '', component: StoneTransportationComponent
}, {
    path: 'cars', component: CarsComponent
}, {
    path: 'motorcycles', component: MotorcyclesComponent
}, {
    path: 'selection', component: SelectionComponent
}]

@NgModule({
    imports: [CommonModule, TransportationCardModule, RouterModule.forChild(routes), CarsModule, MotorcyclesModule, SelectionModule],
    declarations: [StoneTransportationComponent],
    exports: [StoneTransportationComponent]
})
export class StolenTransportationModule {
    static routes = routes;
}