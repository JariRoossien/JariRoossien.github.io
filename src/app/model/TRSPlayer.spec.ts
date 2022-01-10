import { TestBed } from '@angular/core/testing';
import {TRSPlayer} from './TRSPlayer';
import {Gamemode} from './Gamemode';


describe('TRSPlayer', () => {
  let player: TRSPlayer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
    player = new TRSPlayer('2a1afa5bb73d42bcabb4a2e69f402c20', 'DizMizzer', {
      TNTGames: {
        wins: 27987,
        wins_tntrun: 27900,
        deaths_tntrun: 3409
      },
      tntgames: {
        wins: 27987,
        wins_tntrun: 27900,
        deaths_tntrun: 3409
      }
    }, 1500);
  });

  it('TNTGame wins should be 27987', () => {
    expect(player.getSortedValue(Gamemode.TNT_GAMES.accessStrings)).toBe(27987);
  });

  it('TNTRun wins should be 27900', () => {
    expect(player.getSortedValue(Gamemode.TNT_RUN.accessStrings)).toBe(27900);
  });

  it('weeklyExp should be 1500', () => {
    expect(player.getSortedValue(['weeklyExp'])).toBe(1500);
  });
});
