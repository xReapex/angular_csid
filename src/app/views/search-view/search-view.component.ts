import { Component, Input, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/service/films.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  @Input()
  movieId: any | undefined;



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

  public movieInfo: any = [];

  
  constructor(private appService: FilmsService) { }

  ngOnInit(): void {
    this.movieId = this.appService.getMovieToSearch();

    console.log("search : " + this.appService.getMovieToSearch());

    this.appService.getFilmDataById(this.movieId).subscribe(response => {
      this.movieInfo.push(response);
    });

    console.log(this.movieInfo);
    console.log(this.movieInfo['original_title']);

  }
}
