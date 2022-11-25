import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldcupService {

  private API_URL = 'http://144.91.117.131:8081';
  // private API_URL = 'http://localhost:8081';

  constructor(private httpClient: HttpClient) { }

  getLeaderboardPlayers(): Observable<any> {
    return this.httpClient.get(this.API_URL + "/leaderboard");
  }
}
