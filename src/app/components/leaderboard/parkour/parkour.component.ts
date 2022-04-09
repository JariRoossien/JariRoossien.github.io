import { Component, OnInit } from '@angular/core';
import {ParkourType} from '../../../model/ParkourType';
import {PlayerService} from '../../../service/player.service';

@Component({
  selector: 'app-parkour',
  templateUrl: './parkour.component.html',
  styleUrls: ['./parkour.component.scss']
})
export class ParkourComponent implements OnInit {

  selectedParkour: string;
  private service: PlayerService;
  players = undefined;

  parkourTypes: ParkourType[] = [
    {viewValue: "TNT Games", endpoint: "TNT"},
    {viewValue: "Duels", endpoint: "Duels"},
    {viewValue: "Skywars", endpoint: "SkywarsAug2017"},
    {viewValue: "Build Battle", endpoint: "BuildBattle"},
    {viewValue: "Main Lobby 2017", endpoint: "mainLobby2017"},
    {viewValue: "Prototype Lobby", endpoint: "Prototype"},
    {viewValue: "Bedwars", endpoint: "Bedwars"},
    {viewValue: "Blitz Survival Games", endpoint: "BlitzLobby"},
    {viewValue: "Mega Walls", endpoint: "MegaWalls"},
    {viewValue: "UHC", endpoint: "uhc"},
    {viewValue: "Murder Mystery", endpoint: "MurderMystery"},
    {viewValue: "Cops and Crims", endpoint: "CopsnCrims"},
    {viewValue: "Warlords", endpoint: "Warlords"},
    {viewValue: "Arcade Games", endpoint: "ArcadeGames"},
    {viewValue: "Legacy", endpoint: "Legacy"},
    {viewValue: "Housing", endpoint: "Housing"},
    {viewValue: "Super Smash", endpoint: "SuperSmash"},
    {viewValue: "Main Lobby 2022", endpoint: "mainLobby2022"}
  ]

  constructor(playerService: PlayerService) {
    this.selectedParkour = this.parkourTypes[0].endpoint;
    this.service = playerService;
  }

  ngOnInit(): void {
    this.loadNewResults(this.selectedParkour);
  }

  onSelectChange(event: Event): void {
    this.selectedParkour = (event.target as HTMLSelectElement).value;
    this.loadNewResults(this.selectedParkour);
  }

  loadNewResults(endpoint: string): void {
    this.players = undefined;
    this.service.getParkourData(endpoint).subscribe(success => {
      this.players = success;
    });
  }
}
