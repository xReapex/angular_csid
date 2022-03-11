import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/service/films.service';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.css']
})
export class HomepageViewComponent implements OnInit {

  public byGenre: any = [];
  public actionSuggestionName : string | undefined;

  constructor(private appService: FilmsService) { }

  ngOnInit() {
    
    let actionSuggetion : string;

    const genresIdList = ["28", "35", "80", "99"];

    actionSuggetion = genresIdList[Math.floor(Math.random() * genresIdList.length)];

    if(actionSuggetion == "28") {  this.actionSuggestionName = "Action"; }
    else if(actionSuggetion == "35") { this.actionSuggestionName = "Comedy"; }
    else if(actionSuggetion == "80") { this.actionSuggestionName = "Crime"; }
    else if(actionSuggetion == "99") { this.actionSuggestionName = "Documentary"; }
    
    this.appService.getFilmsWithGenre(actionSuggetion).subscribe(response => {
      this.byGenre.push(response);
    });

  }

}