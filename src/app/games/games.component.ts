import {Component, OnInit} from '@angular/core';
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

  constructor(public coinGameService: CoinGameService) {
  }

  ngOnInit(): void {
  }

  checkRound(target: EventTarget | null): void {
    if ((target as HTMLElement).classList
      .contains('last-child')) {
      this.coinGameService.increaseRound();
    } else {
      this.coinGameService.resetRound();
    }
  }
}
