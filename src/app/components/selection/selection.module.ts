import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectionComponent} from './selection.component';
import {GraphsComponent} from '../graphs/graphs.component';
import {GraphsModule} from '../graphs/graphs.module';
import {RouterModule} from '@angular/router';

export const routes = [{
    path : ':id/graphs', component : GraphsComponent
}]

@NgModule({
    imports: [CommonModule, GraphsModule, RouterModule.forChild(routes)],
    declarations: [SelectionComponent],
    exports: [SelectionComponent]
})
export class SelectionModule {
    constructor(){}
}