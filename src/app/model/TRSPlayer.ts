export class TRSPlayer {

  private uuid: string;
  private username: string;
  private stats: {};

  constructor(uuid: string, username: string, stats: {}) {
    this.uuid = uuid;
    this.username = username;
    this.stats = stats;
  }
}
