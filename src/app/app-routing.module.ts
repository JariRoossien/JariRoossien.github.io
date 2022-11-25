import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaderboardComponent} from './components/leaderboard/leaderboard/leaderboard.component';
import {HomeComponent} from './components/home/home/home.component';
import {ParkourComponent} from './components/leaderboard/parkour/parkour.component';
import {WCLeaderboardComponent} from './components/worldcup/wcleaderboard/wcleaderboard.component';

const routes: Routes = [
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'parkour', component: ParkourComponent},
  {path: 'worldcup/leaderboard', component: WCLeaderboardComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
