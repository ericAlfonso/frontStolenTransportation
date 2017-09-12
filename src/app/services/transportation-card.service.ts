import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TransportationCardService {

    constructor(private http: HttpClient){}
    
    updateCard(id:number,transportation:any) {
        return this.http.put('/api/cards/' + id, transportation);
    }

    deleteCard(id:number,title:any) {
        let params = new HttpParams();
        params = params.append('title', title);
        return this.http.delete('/api/cards/' + id, {params: params});
    }
} 