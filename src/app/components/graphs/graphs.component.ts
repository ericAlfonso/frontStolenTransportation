import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GrapsService} from '../../services/graphs.service';

@Component({
    selector: 'graphs',
    templateUrl: './graphs.component.html',
    providers: [GrapsService]
})
export class GraphsComponent implements OnInit{

    constructor(private router: Router, private route: ActivatedRoute,
        private grapsService:GrapsService){
          this.doughnutChartData = [];
          this.doughnutChartLabels = [];
        }
    
    years: any[]
    months: any[]
    days: any[]
    doughnutChartData: any;
    doughnutChartLabels:any;
    doughnutChartType:string

    ngOnInit() {
      console.log(this.route.snapshot.params.id );
      console.log(this.route.snapshot.params.name);
      if(this.route.snapshot.params.id == 1) {
        this.grapsService.getYearStatistics(this.route.snapshot.params.id)
            .subscribe((years:any) => {
              this.years = years;
              console.log(this.years);

              if(this.route.snapshot.params.name == 'cars') {
                this.createGrapsForCarYear(this.years);
              }
              if(this.route.snapshot.params.name == 'motorcycles') {
                this.createGrapsForMotorcycleYear(this.years);
              }
        })     
      }

      if(this.route.snapshot.params.id == 2) {
        this.grapsService.getMonthStatistics(this.route.snapshot.params.id)
            .subscribe((month:any) => {
              this.months = month;
              console.log(this.months);

              if(this.route.snapshot.params.name == 'cars') {
                this.createGrapsForCarMonth(this.months);
              }
              if(this.route.snapshot.params.name == 'motorcycles') {
                this.createGrapsForMotorcycleMonth(this.months);
              }
        })     
      }

      if(this.route.snapshot.params.id == 3) {
        this.grapsService.getDayStatistics(this.route.snapshot.params.id)
            .subscribe((days:any) => {
              this.days = days;
              console.log(this.days);

              if(this.route.snapshot.params.name == 'cars') {
                this.createGrapsForCarMonth(this.days);
              }
              if(this.route.snapshot.params.name == 'motorcycles') {
                this.createGrapsForMotorcycleMonth(this.days);
              }
        })     
      }

      
    }

    // back(){
    //     this.router.navigate(['../'],{relativeTo: this.route})
    // }

  createGrapsForCarYear(years: any[]){
    let data = []
    years.map((year: any) => {
      data.push(year.carAmount);
    })
    this.doughnutChartData = [data];
    console.log(this.doughnutChartData);

    years.map((year: any) => {
      this.doughnutChartLabels.push(year.value);
    })
    this.doughnutChartType = 'doughnut';
  }

  createGrapsForMotorcycleYear(years: any[]){
    let data = []
    years.map((year: any) => {
      data.push(year.motorcycleAmount);
    })
    this.doughnutChartData = [data];
    console.log(this.doughnutChartData);

    years.map((year: any) => {
      this.doughnutChartLabels.push(year.value);
    })
    this.doughnutChartType = 'doughnut';
  }

   createGrapsForCarMonth(months: any[]){
    let data = []
    months.map((month: any) => {
      data.push(month.carAmount);
    })
    this.doughnutChartData = [data];
    console.log(this.doughnutChartData);

    months.map((month: any) => {
      this.doughnutChartLabels.push(month.name);
    })
    this.doughnutChartType = 'doughnut';
  }

  createGrapsForMotorcycleMonth(months: any[]){
    let data = []
    months.map((month: any) => {
      data.push(month.motorcycleAmount);
    })
    this.doughnutChartData = [data];
    console.log(this.doughnutChartData);

    months.map((month: any) => {
      this.doughnutChartLabels.push(month.name);
    })
    this.doughnutChartType = 'doughnut';
  }

  createGrapsForCarDay(days: any[]){
    let data = []
    days.map((day: any) => {
      data.push(day.carAmount);
    })
    this.doughnutChartData = [data];
    console.log(this.doughnutChartData);

    days.map((day: any) => {
      this.doughnutChartLabels.push(day.name);
    })
    this.doughnutChartType = 'doughnut';
  }

  createGrapsForMotorcycleDay(days: any[]){
    let data = []
    days.map((day: any) => {
      data.push(day.motorcycleAmount);
    })
    this.doughnutChartData = [data];
    console.log(this.doughnutChartData);

    days.map((day: any) => {
      this.doughnutChartLabels.push(day.name);
    })
    this.doughnutChartType = 'doughnut';
  }
 
    public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}