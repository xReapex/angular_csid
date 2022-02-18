import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/service/films.service';

@Component({
  selector: 'app-discover-view',
  templateUrl: './discover-view.component.html',
  styleUrls: ['./discover-view.component.css']
})
export class DiscoverViewComponent implements OnInit {

  public discoveredMovies: any = [];
  public discoveredMoviesMissingData: any = [];
  public byName: any = [];
  public byGenre: any = [];


  constructor(private appService: FilmsService) { }

  ngOnInit() {
    let id: string = "510";

    this.appService.getDiscoverFilmsData().subscribe(response => {
      let movieAmount = 4;
      this.discoveredMovies.push(response);

      for (let index = 0; index < movieAmount; index++) {
        this.appService.getDiscoverFilmsMissingDataById(response['results'][index]['id']).subscribe(responseMissingData => {
          this.discoveredMoviesMissingData.push(responseMissingData);
        });
      }
      this.discoveredMovies.push(this.discoveredMoviesMissingData);
    });

    this.appService.getFilmsByName("spider").subscribe(response => {
      this.byName.push(response);
    });

    this.appService.getFilmsWithGenre("action").subscribe(response => {
      this.byGenre.push(response);
    });
  }
}