import {Injectable} from '@angular/core';
import {Face} from '../games/games.component';

@Injectable({
  providedIn: 'root',
})
export class CoinGameService {
  private readonly fieldXSize: number;
  private readonly fieldYSize: number;
  private readonly countPerRound: number;
  private round: number;
  private facesToLeft: Face[] = [];
  private facesToRight: Face[] = [];
  private faceSize = 80;
  private win = false;

  constructor() {
    this.fieldXSize = 400;
    this.fieldYSize = 600;
    this.countPerRound = 10;
    this.round = 1;
    this.fillFaces();
  }

  fillFaces(): void {
    this.facesToLeft = [];
    for (let i = 0; i < this.round * this.countPerRound + 1; i++) {
      this.facesToLeft.push({
        x: Math.floor(Math.random() * (this.fieldXSize - this.faceSize)),
        y: Math.floor(Math.random() * (this.fieldYSize - this.faceSize)),
      });
    }
    this.facesToRight = this.facesToLeft.filter(
      (e, i) => i !== this.facesToLeft.length - 1
    );
  }

  public increaseRound(): void {
    this.round++;
    this.fillFaces();
  }

  public resetRound(): void {
    this.round = 1;
    this.fillFaces();
  }

  public getRound(): number {
    return this.round;
  }

  public getFacesToLeft(): Face[] {
    return this.facesToLeft;
  }

  public getFacesToRight(): Face[] {
    return this.facesToRight;
  }

  getCountPerRound(): number {
    return this.countPerRound;
  }
}
