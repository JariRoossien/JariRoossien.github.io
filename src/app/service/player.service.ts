import {Injectable} from '@angular/core';
import {TRSPlayer} from '../model/TRSPlayer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private API_URL = 'http://135.125.133.233:8080/player';

  constructor(private httpClient: HttpClient) {
  }

  getPlayerStats(gamemode: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/${gamemode}`);
  }
}
