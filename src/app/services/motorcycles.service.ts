import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MotorcyclesService {

    constructor(private http: HttpClient){}

    getMotorcycles(){
        return this.http.get('/api/motorcycles');
    }
}