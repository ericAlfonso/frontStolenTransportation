import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GraphsComponent} from './graphs.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
    imports: [CommonModule, ChartsModule],
    declarations: [GraphsComponent],
    exports: [GraphsComponent]
})
export class GraphsModule {
    constructor(){}
}