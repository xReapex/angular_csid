import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { FilmsService } from './../../service/films.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private filmsService: FilmsService) {}

  placeholder = 'Search Movies';
  keyword = 'name';
  public data: any = [];
  private resultsRequest: any = [];

  @Input() event: any
  @Output() Emitter = new EventEmitter();

  ngOnInit(): void {

    let html = document.getElementsByTagName('html')[0]
    if (localStorage.getItem('data-theme') == "dark"){
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }


  toggleDarkMode() {

    let html = document.getElementsByTagName('html')[0]

    if (localStorage.getItem('data-theme') == "dark") {
      localStorage.setItem('data-theme', 'light');
      localStorage.setItem('html', 'light');
      html.classList.remove("dark");

    } else {
      localStorage.setItem('data-theme', 'dark');
      localStorage.setItem('html', 'dark');
      html.classList.add("dark");
    }
  }

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

