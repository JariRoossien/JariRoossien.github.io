import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaderboardComponent} from './components/leaderboard/leaderboard/leaderboard.component';
import {HomeComponent} from './components/home/home/home.component';

const routes: Routes = [
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
