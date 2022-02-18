import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vert-navbar',
  templateUrl: './vert-navbar.component.html',
  styleUrls: ['./vert-navbar.component.css']
})
export class VertNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
