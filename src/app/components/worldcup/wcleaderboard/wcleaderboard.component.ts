import { Component, OnInit } from '@angular/core';
import {WorldcupService} from '../../../service/worldcup.service';
import {LeaderboardPlayer} from '../../../model/LeaderboardPlayer';
import {MatchSelection} from '../../../model/MatchSelection';
import {SpecificResult} from '../../../model/SpecificResult';

@Component({
  selector: 'app-wcleaderboard',
  templateUrl: './wcleaderboard.component.html',
  styleUrls: ['./wcleaderboard.component.scss']
})
export class WCLeaderboardComponent implements OnInit {

  players: LeaderboardPlayer[];
  options: MatchSelection[];
  selectedOption: MatchSelection;
  matchResults: SpecificResult[];

  constructor(private wcService: WorldcupService) { }

  ngOnInit(): void {
    this.wcService.getLeaderboardPlayers().subscribe(
      result => {
        this.players = (result.map(player => new LeaderboardPlayer(player.nickName, player.discordName, player.score)));
      });
    this.wcService.getPossibleMatches().subscribe(
      result => {
        this.options = (result.map(option => new MatchSelection(option.matchId, option.teamLeft, option.teamRight, option.teamWon, option.leftPoints, option.rightPoints)));
        this.selectedOption = this.options[0];
        this.updateValuesFor(this.selectedOption);
      }
    )
  }

  getIndexFor(player: LeaderboardPlayer): number {
    let index = 1;
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].equals(player)) {
        return index;
      }
      if (this.players[i].score !== player.score) {
        index++;
      }
    }

    return index;
  }

  updateValuesFor(newValue: MatchSelection) {
    this.matchResults = undefined;
    this.wcService.getResultFor(newValue.matchId).subscribe(
      result => {
        this.matchResults = result.map(row => new SpecificResult(row.name, row.result, row.teamChoice, row.points));
      }
    )
  }
}
