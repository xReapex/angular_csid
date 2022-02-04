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

  // Request API with endpoint
  private requestAPI(endpoint: string)
  {
    this.http.get(`${this.baseUrl}${endpoint}?api_key=${environment.tmdb_api_key}`).subscribe((res)=>{
      return res;
    });
  }

  /**
  * Functions related to movies
  */
  /*getFilmsByName(name: string) {
    this.allFilmsByName = this.requestAPI(`/search/movie/&query=${name}`);
  }

  getFilmById(id: number) {
    this.filmById = this.requestAPI(`/movie/${id}`);
  }

  getDiscoverFilms() {
    this.discoverMovies = this.requestAPI('/discover/movie');
  }

  getFilmsWithGenre(genre: string) {
    this.filmsWithGenre = this.requestAPI(`/discover/movie&with_genres=${genre}`);
  }*/


  getFilmDataById(id: string): Observable<any> {
    let url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=fe8a03499179c3db4bb693fe5da719ec";
    return this.http.get(url);
  }

  getDiscoverFilmsData(): Observable<any> {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=fe8a03499179c3db4bb693fe5da719ec";
    return this.http.get(url);
  }

  getDiscoverFilmsMissingDataById(discoveredMoviesMissingData: string): Observable<any> {
    //Get missing datas : runtime, homepage link and genre
    return this.getFilmDataById(discoveredMoviesMissingData);
  }
  
}
