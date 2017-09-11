import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {CarsService} from '../../services/cars.service';

@Component({
    selector: 'cars',
    templateUrl: './cars.component.html',
    providers: [CarsService]
})
export class CarsComponent implements OnInit{

    constructor(private router: Router, private route: ActivatedRoute,
                private carsService:CarsService){}

    items:any []

    ngOnInit(){
        this.carsService.getCars().subscribe((cars:any) => {
            this.items = cars;
            this.items.map(item => {
                item.enabled = false;
            })
        })
    }

    back(){
        this.router.navigate(['../'],{relativeTo: this.route})
    }
}