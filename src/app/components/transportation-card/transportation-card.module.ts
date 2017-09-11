import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransportationCardComponent} from './transportation-card.component';
import {RouterModule} from '@angular/router';
import {SelectionComponent} from '../selection/selection.component';
import {SelectionModule} from '../selection/selection.module';
import {FormsModule} from '@angular/forms';

export const routes = [{
    path: ':name/:id/statistics', component: SelectionComponent
}]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SelectionModule, FormsModule],
    declarations: [TransportationCardComponent],
    exports: [TransportationCardComponent]
})
export class TransportationCardModule {
    constructor(){}
}