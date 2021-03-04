import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-triple-switcher',
  templateUrl: './triple-switcher.component.html',
  styleUrls: ['./triple-switcher.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TripleSwitcherComponent implements OnInit {
  @Input() title: string;
  @Input() offWord: string;
  @Input() onWord: string;
  @Input() middleWord: string;
  @Input() height: number;
  @Input() state: number;
  @Output() stateChange: EventEmitter<number>;

  constructor() {
    this.title = 'Triple Switcher';
    this.state = 0;
    this.height = 40;
    this.offWord = 'Off';
    this.middleWord = 'Maybe';
    this.onWord = 'On';
    this.stateChange = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  switch(): void {
    this.state++;
    if (this.state === 3) {
      this.state = 0;
    }
    this.stateChange.emit(this.state);
  }
}
