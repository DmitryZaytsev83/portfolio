import {Component, ElementRef, OnInit} from '@angular/core';

interface Face {
  x: number;
  y: number;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
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

  constructor() {
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.fillFaces();
  }

  fillFaces(): void {
    this.facesToLeft = [];
    for (let i = 0; i < this.round * this.countPerRound + 1; i++) {
      this.facesToLeft.push({
        x: Math.floor(Math.random() * (this.fieldXSize - this.faceSize)),
        y: Math.floor(Math.random() * (this.fieldYSize - this.faceSize))
      });
    }
    this.facesToRight = this.facesToLeft.filter((e, i) => i !== this.facesToLeft.length - 1);
  }

  checkRound(target: EventTarget | null): void {
    if ((target as HTMLElement).classList.contains('last-child')) {
      this.round++;
    } else {
      this.round = 1;
    }
    this.fillFaces();
  }
}
