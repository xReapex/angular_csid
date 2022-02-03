import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
