import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  // Base URL for TMDB API
  private baseUrl = "https://api.themoviedb.org/3";

  // Use HttpClient
  constructor(private http: HttpClient) {}

  // Available data
  public allFilmsByName:any = [];
  public filmById:any = [];
  public discoverMovies:any = [];
  public filmsWithGenre:any = [];

  public movieIdToSearch: any | undefined;

  // Request API with endpoint
  private requestAPI(endpoint: string, query?: string)
  {
    if(typeof query !== 'undefined')
    {
      return this.http.get(`${this.baseUrl}${endpoint}?api_key=${environment.tmdb_api_key}${query}`);
    }
    return this.http.get(`${this.baseUrl}${endpoint}?api_key=${environment.tmdb_api_key}`);
  }

  /**
  * Functions related to movies
  */
  getFilmDataById(id: string): Observable<any> {
    return this.requestAPI(`/movie/${id}`);
  }

  getDiscoverFilmsData(): Observable<any> {
    return this.requestAPI('/discover/movie');
  }

  getDiscoverFilmsMissingDataById(movieId: string): Observable<any> {
    //Get missing datas : runtime, homepage link and genre
    return this.getFilmDataById(movieId);
  }
  
  getFilmsByName(name: string) {
    return this.requestAPI("/search/movie", `&query=${name}`);
  }

  getFilmsWithGenre(genre: string) {
    return this.requestAPI("/discover/movie", `&with_genres=${genre}`);
  }

  setMovieToSearch(id: number)
  {
    this.movieIdToSearch = id;
    console.log("received : " + this.movieIdToSearch);
  }

  getMovieToSearch()
  {
    return this.movieIdToSearch;
  }
 
}
