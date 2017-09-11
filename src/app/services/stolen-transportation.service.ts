import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StolenTransportationService {

    constructor(private http: HttpClient){}
    
    getTopCars(){
        return this.http.get('/api/cars/top');
    }

    getTopMotorcycles(){
        return this.http.get('/api/motorcycles/top');
    }
} 
