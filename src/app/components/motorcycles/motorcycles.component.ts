import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MotorcyclesService} from '../../services/motorcycles.service';

@Component({
    selector: 'motorcycles',
    templateUrl: './motorcycles.component.html',
    providers: [MotorcyclesService]
})
export class MotorcyclesComponent implements OnInit{
    constructor(private router: Router, private route: ActivatedRoute,
        private motorcyclesService:MotorcyclesService){}

    items:any []

    ngOnInit(){
        this.motorcyclesService.getMotorcycles().subscribe((motorcycles:any) => {
            this.items = motorcycles;
            this.items.map(item => {
                item.enabled = false;
            })
        })
    }

    back(){
        this.router.navigate(['../'],{relativeTo: this.route})
    }
}