import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TMDB_API_KEY } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_csid';
  private data:any = []
  constructor(private http: HttpClient) {}

  getData(){
    const url =` https://api.themoviedb.org/3/movie/550?api_key=${TMDB_API_KEY.TMDB_API_KEY}`
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}
