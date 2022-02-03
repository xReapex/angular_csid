import { Component } from '@angular/core';
import { FilmsService } from './films.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public movieName: any;
  public overview: any;
  public overralNote: any;
  public genre: any;

  public discoveredMovies: any = [];

  constructor(private appService : FilmsService ) {}

  ngOnInit() {
    let id :string = "510";

    this.appService.getFilmDataById(id).subscribe(response =>{
        let prod = JSON.stringify(response);
        //console.log(prod);

        this.movieName = response['original_title'];
        this.overview = response['overview'];
        this.overralNote = response['vote_average'];
        this.genre = response['genres']['0']['name'];
    });

    this.appService.getDiscoverFilmsData().subscribe(response =>{
      this.discoveredMovies.push(response);
      console.log(this.discoveredMovies);

  });

  }
}
