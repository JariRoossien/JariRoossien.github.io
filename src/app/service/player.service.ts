import {Injectable} from '@angular/core';
import {TRSPlayer} from '../model/TRSPlayer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // private API_URL = 'http://localhost:8080/player';
  private API_URL = 'http://smp.trs-guild.com:8080/player';

  constructor(private httpClient: HttpClient) {
  }

  getPlayerStats(gamemode: string): Observable<any> {
    console.log("Requesting data... for " + gamemode);
    return this.httpClient.get(`${this.API_URL}/${gamemode}`);
  }

  getParkourData(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/parkour/${endpoint}`);
  }
}
