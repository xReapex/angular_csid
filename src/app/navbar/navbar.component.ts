import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    const htmlPage = document.querySelector("html");

    const switchState = document.querySelector("#checkSwitch")!
    const movieCatalog = document.getElementById("movieCatalog");
    const switchText = document.getElementById("switchText");

    const toggleDarkMode = function () {
      if(htmlPage!.style.backgroundColor == "black") {

        htmlPage!.style.backgroundColor = "white";
        htmlPage!.style.color = "black";

        movieCatalog!.style.color = "black";
        switchText!.style.color = "black";

        console.log('toggled to white') 
      }
      else {
        htmlPage!.style.backgroundColor = "black";
        htmlPage!.style.color = "white";
        
        movieCatalog!.style.color = "white";
        switchText!.style.color = "white";

        console.log('toggled to black') 
      }
  } 
  switchState.addEventListener("change", toggleDarkMode);
  }

  

}

