export class MatchSelection {
  public readonly matchId: string;
  private readonly teamLeft: string;
  private readonly teamRight: string;

  private readonly teamWon: number;
  private readonly leftPoints: number;
  private readonly rightPoints: number;

  constructor(matchId: string, teamLeft: string, teamRight: string, teamWon: number, leftPoints: number, rightPoints: number) {
    this.matchId = matchId;
    this.teamLeft = teamLeft;
    this.teamRight = teamRight;
    this.teamWon = teamWon;
    this.leftPoints = leftPoints;
    this.rightPoints = rightPoints;
  }

  public getWinner(): string {
    switch (this.teamWon) {
      case 1:
        return this.getAsDisplay(this.teamLeft);
      case 2:
        return "Tie";
      case 3:
        return this.getAsDisplay(this.teamRight);
      default:
        return "No result!";
    }
  }

  public getScore(): string {
    return this.leftPoints + "-" + this.rightPoints;
  }

  public getMatchName(): string {
    return this.getAsDisplay(this.teamLeft) + "-" + this.getAsDisplay(this.teamRight);
  }

  private getAsDisplay(input: string): string {
    return input.substr(0, 1).toUpperCase() + input.substr(1).toLowerCase();
  }

}
