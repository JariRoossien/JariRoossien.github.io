import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaderboardComponent} from './components/leaderboard/leaderboard/leaderboard.component';
import {HomeComponent} from './components/home/home/home.component';
import {ParkourComponent} from './components/leaderboard/parkour/parkour.component';

const routes: Routes = [
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'parkour', component: ParkourComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
