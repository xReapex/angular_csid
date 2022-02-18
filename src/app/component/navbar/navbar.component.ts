import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()  event:any
  @Output() Emitter = new EventEmitter();
  constructor() { }

  //const checkbox = document.querySelector("#checkbox");
  //html = document.getElementsByTagName("html");
 

  ngOnInit(): void {

   

}



toggleDarkMode() {

  console.log("dark mode");
  
  let html = document.getElementsByTagName('html')[0]
    if(html.classList.contains("dark")){
      html.classList.remove("dark");
    } else {
     html.classList.add("dark");
    }
   // checkbox.checked
    //? html.classList.add("dark")      
    //: html.classList.remove("dark");
    this.Emitter.emit(event);
  }

//calling the function directly

  //toggleDarkMode();
  //checkbox.addEventListener("click",toggleDarkMode);
  
  }

