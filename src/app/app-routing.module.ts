import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { LastWScorecardComponent } from './last-w-scorecard/last-w-scorecard.component';
import { HomeComponent } from './home/home.component';
import { UserRankComponent } from './user-rank/user-rank.component';


const routes: Routes = [
  {
  path:"",
 component:HomeComponent

  },
  {
  path:"last-week-leaderboard",
  component:LastWScorecardComponent
  },
  {
    component:CardComponent,
    path:"score_card"
  },
  {
    path:"user-rank",
    component:UserRankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
