import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/service/films.service';

@Component({
  selector: 'app-homepage-suggestions',
  templateUrl: './homepage-suggestions.component.html',
  styleUrls: ['./homepage-suggestions.component.css']
})
export class HomepageSuggestionsComponent implements OnInit {
  public byGenre: any = [];
  public actionSuggestionName : string | undefined;

  constructor(private appService: FilmsService, private router: Router) { }

  ngOnInit() {
    
    let actionSuggetion : string;

    const genresIdList = ["37", "35", "80", "10751"];

    actionSuggetion = genresIdList[Math.floor(Math.random() * genresIdList.length)];

    if(actionSuggetion == "37") {  this.actionSuggestionName = "Western"; }
    else if(actionSuggetion == "35") { this.actionSuggestionName = "Comedy"; }
    else if(actionSuggetion == "80") { this.actionSuggestionName = "Crime"; }
    else if(actionSuggetion == "10751") { this.actionSuggestionName = "Family"; }
    
    this.appService.getFilmsWithGenre(actionSuggetion).subscribe(response => {
      this.byGenre.push(response);
    });

  }

  reloadSuggestions()
  {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
 }
}
