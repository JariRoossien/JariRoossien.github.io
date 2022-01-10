import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../../service/player.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  players = [];

  constructor(private playerService: PlayerService) {

  }

  ngOnInit(): void {
    this.playerService.getPlayerStats('tntrun').subscribe((data) => {
      console.log(data);
      this.players = data;
      console.log(this.players);
      let total = 0;
      for (let i = 0; i < this.players.length; i++) {
        total += this.players[i].stats.tntgames.wins_tntrun;
      }
      console.log(total);
    });
  }

}
