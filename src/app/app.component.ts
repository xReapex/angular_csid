import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'TMDB API w/Angular';
  public data:any = [this.getData()]
  constructor(private http: HttpClient) {}

  getData(){
    const url = `https://api.themoviedb.org/3/movie/550?api_key=${environment.tmdb_api_key}`
    this.http.get(url).subscribe((res)=>{
      this.data = res
      return this.data
    })
  }
}
