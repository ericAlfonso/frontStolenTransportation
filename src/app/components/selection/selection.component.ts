import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SelectionService} from '../../services/selection.service';

@Component({
    selector: 'selection',
    templateUrl: './selection.component.html',
    providers: [SelectionService]
})
export class SelectionComponent implements OnInit{
    constructor(private router: Router, private route: ActivatedRoute,
        private selectionService:SelectionService){
            this.statistics = [];
        }

    statistics: any[]

    ngOnInit(){
        this.selectionService.getStadistics().subscribe((statistics:any) => {
            this.statistics = statistics;
        })
    }    

    back() {
         this.router.navigate(['../../'],{relativeTo: this.route})
    }

    backToTop(){
        this.router.navigateByUrl('/stolen-transportation');
    }

    goToGraphs(id:number){
        console.log(this.route)
        this.router.navigate([id,"graphs", {name: this.route.snapshot.params.name}]);
    }
}