import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BrowseListService {
    constructor(private http: HttpClient) {

    }


    public getTrendingJSON(): Observable<any> {
        return this.http.get<any>(`https://api.themoviedb.org/3/trending/all/day?api_key=241a8351ec6888c75cc045b7950277ce`).map(examSession => {
            //console.log("service json");
            //console.log(rolelist);
            return examSession;
        });
    }
}