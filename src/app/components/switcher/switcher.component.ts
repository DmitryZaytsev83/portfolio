import {Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SwitcherComponent implements OnInit {
  @Input() title: string;
  @Input() height: number;
  @Input() state: boolean;
  @Output() stateChange = new EventEmitter<boolean>();
  offWord: string;
  onWord: string;

  constructor() {
    this.state = true;
    this.height = 100;
    this.offWord = 'Off';
    this.title = '';
    this.onWord = 'On';
  }

  ngOnInit(): void {
  }

  switch(): void {
    this.state = !this.state;
    this.stateChange.emit(this.state);
  }
}
