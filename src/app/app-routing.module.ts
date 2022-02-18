import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverViewComponent } from './views/discover-view/discover-view.component';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';

const routes: Routes = [];

@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: 'homepage', component: HomepageViewComponent },
      { path: 'discover', component: DiscoverViewComponent },
      { path: '**', redirectTo: 'homepage' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}