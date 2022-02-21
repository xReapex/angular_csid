import { HtmlParser } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() event: any
  @Output() Emitter = new EventEmitter();
  constructor() { }

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

}

