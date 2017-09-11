import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SelectionService {

    constructor(private http: HttpClient){}

    getStadistics(){
        return this.http.get('/api/statistics');
    }

}