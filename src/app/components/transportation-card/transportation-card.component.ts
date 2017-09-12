import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {TransportationCardService} from '../../services/transportation-card.service'


@Component({
    selector: 'transportation-card',
    templateUrl: './transportation-card.component.html',
    providers: [TransportationCardService]
})
export class TransportationCardComponent implements OnInit{
    constructor(private router: Router, private route: ActivatedRoute, private transportationCardService: TransportationCardService){}

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
        console.log(this.items);
        this.isEditing = true;
        this.mark = this.items.mark;
    }

    save(id:number, title:String){
        console.log(this.mark);
        let transportation = {
            mark: this.mark,
            title: title
        }
        this.transportationCardService.updateCard(id ,transportation).subscribe(response => {
            this.isEditing = false;
            this.items.mark = this.mark;
        }, error => {
            console.log("Id not found");
        })
    }

    deleteCard(id:number, title:String) {
        this.transportationCardService.deleteCard(id, title).subscribe(response => {
            window.location.reload();
        }, error => {
            console.log("Id not found")
        })
    }
}