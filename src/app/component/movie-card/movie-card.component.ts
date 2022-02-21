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
  @Input()
  homepage: string | undefined;

  public title = 'TMDB API w/Angular';
  constructor() {}

  ngOnInit(): void {

  }
}
