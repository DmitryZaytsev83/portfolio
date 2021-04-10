import {Component, OnInit} from '@angular/core';
import {CoinGameService} from '../../../services/coin-game.service';

export interface Face {
  x: number;
  y: number;
}

@Component({
  selector: 'app-games',
  templateUrl: './coin-game.component.html',
  styleUrls: ['./coin-game.component.css'],
})
export class CoinGameComponent implements OnInit {

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
