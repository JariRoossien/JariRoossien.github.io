export class LeaderboardPlayer {

  private readonly nickName: string;
  private readonly discordName: string;
  public readonly score: number;

  constructor(nickName: string, discordName: string, score: number) {
    this.nickName = nickName;
    this.discordName = discordName;
    this.score = score;
  }

  public getName(): string {
    if (this.nickName === null || this.nickName === undefined) {
      return this.discordName;
    }
    return this.nickName;
  }

  public equals(oPlayer: LeaderboardPlayer): boolean {
    return this.nickName === oPlayer.nickName &&
      this.discordName === oPlayer.discordName &&
      this.score === oPlayer.score;
  }
}
