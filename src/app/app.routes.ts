
export const Routes = [{
    path: '', redirectTo: 'stolen-transportation', pathMatch: 'full'
}, {
    path: 'stolen-transportation', loadChildren: './components/stolen-transportation/stolen-transportation.module#StolenTransportationModule'
}]