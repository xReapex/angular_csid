import { FilmsService } from './../../service/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {}

  placeholder = 'Search Movies';
  keyword = 'name';
  public data: any = [];
  private resultsRequest: any = [];

  selectEvent(item: any) {
    // do something with selected item
  }

  onChangeSearch(val: string) {

    if (val.length >= 3) {
      // Search movies by title
      this.filmsService.getFilmsByName(val).subscribe(response => {
        this.resultsRequest.push(response);
      });

      if (this.resultsRequest[0]['results'] !== 'undefined')
      {
        let i = 1;
        for (const film of this.resultsRequest[0]['results']) {
          this.data.push({
            id: i,
            name: film["title"]
          })
          i++;
        }
      }
    }
     // Clear movies
     this.resultsRequest.length = 0;
  }

  onFocused(e: any) {
    // do something when input is focused
  }
}
