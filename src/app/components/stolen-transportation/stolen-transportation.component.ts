import {Component, OnInit} from '@angular/core';
import {StolenTransportationService} from '../../services/stolen-transportation.service'

@Component({
    selector: 'stolen-transportation',
    templateUrl: './stolen-transportation.component.html',
    providers: [StolenTransportationService]
})
export class StoneTransportationComponent implements OnInit{
    constructor(private stolenTransportationService: StolenTransportationService){}

    items:any [];
    cars:any [];

    ngOnInit(){
        this.stolenTransportationService.getTopCars().subscribe((cars: any) => {
            this.cars = cars; 
            this.cars.map(car => {
                car.enabled = true;
            })
            this.stolenTransportationService.getTopMotorcycles().subscribe((motorcycles: any) => {
                motorcycles.map(motorcycle => {
                motorcycle.enabled = true;
            })
            this.items = this.cars.concat(motorcycles);
            console.log(this.items);
            })
        })
    }
}