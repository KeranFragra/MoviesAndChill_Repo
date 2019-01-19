import { Trending } from './Trending';

export class Movie{
    page : number;
    results : Trending[] = [];
    total_pages : number;
    total_results : number;    
}