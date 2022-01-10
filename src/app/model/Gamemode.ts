export class Gamemode {

  public static TNT_RUN: Gamemode = new Gamemode('TNT Run', 'tntrun', ['stats', 'tntgames', 'wins_tntrun']);
  public static TNT_GAMES: Gamemode = new Gamemode('TNT Games', 'tntgames', ['stats', 'tntgames', 'wins']);


  constructor(readonly publicName: string, readonly apiName: string, readonly accessStrings: string[]) {

  }
}
