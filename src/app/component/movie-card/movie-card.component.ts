import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  public title = 'TMDB API w/Angular';
  public data:any = [this.getData()]
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getData(){
    const url = `https://api.themoviedb.org/3/movie/532?api_key=${environment.tmdb_api_key}`
    this.http.get(url).subscribe((res)=>{
      this.data = res;
      console.log(this.data);
      return this.data;
    })
  }
}
