import { Component, OnInit } from '@angular/core';
import {WorldcupService} from '../../../service/worldcup.service';

@Component({
  selector: 'app-wcleaderboard',
  templateUrl: './wcleaderboard.component.html',
  styleUrls: ['./wcleaderboard.component.scss']
})
export class WCLeaderboardComponent implements OnInit {

  players = [];

  constructor(private wcService: WorldcupService) { }

  ngOnInit(): void {
    this.wcService.getLeaderboardPlayers().subscribe(
      result => this.players = result);
  }

}
