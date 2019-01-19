import { Component, OnInit, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormControl } from '../../../node_modules/@angular/forms';
import { Observable, Subject, ReplaySubject } from '../../../node_modules/rxjs';
import { map, startWith, takeUntil, first } from 'rxjs/operators';
import { MatSelect } from '../../../node_modules/@angular/material/select';
import { BrowseListService } from './browse-list.service';
import { Trending } from '../Model/Trending';
import { Movie } from '../Model/Movie';
import { Router } from '../../../node_modules/@angular/router';
import { MovieService } from '../Services/movie-service';

export interface Role {
    roleId: string;
    roleName: string;
    roleDescription: string;
    userCount: number;
}
@Component({
    selector: 'app-browse-list',
    templateUrl: './browse-list.component.html',
    styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {

    movie : Movie = new Movie();
    trendingList : Trending[] = [];

    constructor(public appBrowseListService: BrowseListService,
        public router: Router,
        public appMovieService: MovieService) { }

    ngOnInit() {
        /* Call the API to get all the Trending Movies */
        this.appBrowseListService.getTrendingJSON().pipe(first()).subscribe(data => {
            console.log(data);
            this.movie = data;
            this.trendingList = this.movie.results;
        },
            error => {
                console.log(error);
            });
            console.log(this.trendingList);
    }

    showMovieItem(event,item){
        console.log("Clicked");
        this.router.navigate(["app-browse-list/edit-exam-session"]);
        this.appMovieService.sendMessage(item);
    }
}
