import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Trending } from '../Model/Trending';

@Injectable()
export class MovieService {
    private subject = new Subject<any>();
    private trendingMovie: Trending = new Trending();
    
    sendMessage(trendingMovie1: Trending) {
        this.trendingMovie = trendingMovie1;
    }
    
    getMessage(): Trending {
        return this.trendingMovie;

    }
}