import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movieTitle: string | undefined;
  @Input()
  overviewMovie: string | undefined;
  @Input()
  note: string | undefined;
  @Input()
  genre: string | undefined;
  @Input()
  date: string | undefined;
  @Input()
  runtime: string | undefined;
  @Input()
  poster: string | undefined;

  public title = 'TMDB API w/Angular';
  public data:any = [this.getData()]
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
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
