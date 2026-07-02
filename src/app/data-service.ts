import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortfolioData } from './types/portfolio.types';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class DataService {
    constructor(private http: HttpClient){}
    getPortfolioData(language:string): Observable<PortfolioData>{
        return this.http.get<PortfolioData>(`/data.${language}.json`)
    }
}
