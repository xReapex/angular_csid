import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { VertNavbarComponent } from './component/vert-navbar/vert-navbar.component';
import { DiscoverViewComponent } from './views/discover-view/discover-view.component';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    NavbarComponent,
    VertNavbarComponent,
    DiscoverViewComponent,
    HomepageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
