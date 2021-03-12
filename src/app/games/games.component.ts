import {Component, ElementRef, OnInit} from '@angular/core';
import {CoinGameService} from '../services/coin-game.service';

export interface Face {
  x: number;
  y: number;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  fieldXSize = 400;
  fieldYSize = 600;
  public countPerRound = 10;
  public round = 1;
  public facesToLeft: Face[] = [];
  public facesToRight: Face[] = [];
  public faceSize = 80;
  public win = false;

  constructor(private coinGameService: CoinGameService) {
  }

  ngOnInit(): void {
    this.initRound();
  }

  checkRound(target: EventTarget | null): void {
    if ((target as HTMLElement).classList.contains('last-child')) {
      this.coinGameService.increaseRound();
    } else {
      this.coinGameService.resetRound();
    }
    this.initRound();
  }

  private initRound(): void {
    this.facesToLeft = this.coinGameService.getFacesToLeft();
    this.facesToRight = this.coinGameService.getFacesToRight();
    this.round = this.coinGameService.getRound();
  }
}
