import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GrapsService {

    constructor(private http: HttpClient){}

    getYearStatistics(id:number){
        return this.http.get('/api/statistics/' + id + '/year');
    }

    getMonthStatistics(id:number){
        return this.http.get('/api/statistics/' + id + '/month');
    }

    getDayStatistics(id:number){
        return this.http.get('/api/statistics/' + id + 'day');
    }

}