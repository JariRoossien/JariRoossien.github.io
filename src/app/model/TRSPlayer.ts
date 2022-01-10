export class TRSPlayer {

  public uuid: string;
  public username: string;
  public stats: {};
  public weeklyExp: number;

  constructor(uuid: string, username: string, stats: {}, weeklyExp: number) {
    this.uuid = uuid;
    this.username = username;
    this.stats = stats;
    this.weeklyExp = weeklyExp;
  }

  public getSortedValue(keys: string[]): number {
    /* Example [stats, tntgames, tntrun_wins]
    i = 0; curKey = stats;
    i = 1; curKey = stats.tntgames;
    i = 2; curKey = stats.tntgames.tntrun_wins;
     */
    if (keys.length == 1) {
      return this[keys[0]];
    }
    let i = 1;
    let curKey = this.stats;
    while (keys.length - 1 > i) {
      console.log(curKey);
      curKey = curKey[keys[i++]];
    }

    return curKey[keys[i]];
  }
}
