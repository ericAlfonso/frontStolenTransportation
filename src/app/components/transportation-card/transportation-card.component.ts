import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'transportation-card',
    templateUrl: './transportation-card.component.html'
})
export class TransportationCardComponent implements OnInit{
    constructor(private router: Router, private route: ActivatedRoute){}

    @Input()
    items: any

    mark: any;
    isEditing = false;

    ngOnInit(){
        console.log(this.items);
    }

    goToDetails(title:string){
        console.log(this.items.enabled)
            this.router.navigate([this.items.id, 'statistics', {name : title}],
                {relativeTo: this.route})
    }

    editName() {
        this.isEditing = true;
        this.mark = this.items.mark;
    }

    save(){
        console.log(this.mark);
        this.isEditing = false;
        this.items.mark = this.mark;
    }
}