import { Router } from '../../../node_modules/@angular/router';
import { Component } from '../../../node_modules/@angular/core';
import { Trending } from '../Model/Trending';
import { MovieService } from '../Services/movie-service';

@Component({
    selector: 'display-movie-details',
    templateUrl: './display-movie-details.component.html',
    styleUrls: ['./browse-list.component.scss']
})
export class displayMovieComponent {

    movieDetail: Trending;
    constructor(public router: Router,
    private appMovieService: MovieService){ 
        this.movieDetail = this.appMovieService.getMessage();
    }

    ngOnInit() {

    }
}
