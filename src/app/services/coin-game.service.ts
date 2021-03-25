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
  private facesToLeft: Face[];
  private facesToRight: Face[];
  private faceSize = 80;

  constructor() {
    this.fieldXSize = 400;
    this.fieldYSize = 600;
    this.countPerRound = 10;
    if (localStorage.getItem('round') !== null) {
      this.round = JSON.parse(localStorage.getItem('round') as string);
      console.log('round from localstorage');
    } else {
      console.log('new set round');
      localStorage.setItem('round', '1');
      this.round = JSON.parse(localStorage.getItem('round') as string);
    }
    if (localStorage.getItem('facesToLeft') !== null && localStorage.getItem('facesToRight') !== null) {
      console.log('from localstorage');
      this.facesToLeft = JSON.parse(localStorage.getItem('facesToLeft') as string);
      this.facesToRight = JSON.parse(localStorage.getItem('facesToRight') as string);
    } else {
      console.log('new items');
      this.facesToLeft = this.fillFacesToLeft();
      this.facesToRight = this.fillFacesToRight();
    }
  }

  fillFacesToLeft(): Face[] {
    const facesToLeft: Face[] = [];
    for (let i = 0; i < this.round * this.countPerRound + 1; i++) {
      facesToLeft.push({
        x: Math.floor(Math.random() * (this.fieldXSize - this.faceSize)),
        y: Math.floor(Math.random() * (this.fieldYSize - this.faceSize)),
      });
    }
    localStorage.setItem('facesToLeft', JSON.stringify(facesToLeft));
    return JSON.parse(localStorage.getItem('facesToLeft') as string);
  }

  private fillFacesToRight(): Face[] {
    const facesToRight = this.facesToLeft.filter(
      (e, i) => i !== this.facesToLeft.length - 1
    );
    localStorage.setItem('facesToRight', JSON.stringify(facesToRight));
    return JSON.parse(localStorage.getItem('facesToRight') as string);
  }

  fillFaces(): void {
    this.facesToLeft = this.fillFacesToLeft();
    this.facesToRight = this.fillFacesToRight();
  }

  public increaseRound(): void {
    this.round++;
    localStorage.setItem('round', this.round.toString());
    this.fillFaces();
  }

  public resetRound(): void {
    this.round = 1;
    localStorage.setItem('round', this.round.toString());
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

  public getFaceSize(): number {
    return this.faceSize;
  }

  public getFieldXSize(): number {
    return this.fieldXSize;
  }

  public getFieldYSize(): number {
    return this.fieldYSize;
  }
}
