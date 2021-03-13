import {Component, ViewEncapsulation} from '@angular/core';
import {ResizedEvent} from 'angular-resize-event';
import {ThemeService} from './services/theme.service';

interface Line {
  [fill: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})


export class AppComponent {
  title = 'portfolio';
  showDrawer = false;
  public lines: Line[] = [];
  public svgWidth = 0;
  public svgHeight = 0;

  constructor(public themeService: ThemeService) {
  }

  onResized(event: ResizedEvent): void {
    this.svgWidth = event.newWidth;
    this.svgHeight = event.newHeight;
    this.lines = [];
    this.lines.push({
      fill: 'none',
      stroke: 'magenta',
      d: `M 0 0, C ${event.newWidth} 0, 0 ${event.newHeight}, ${event.newWidth} ${event.newHeight - 20}`
    });
    this.lines.push({
      fill: 'none',
      stroke: 'darkviolet',
      d: `M 0 ${event.newHeight / 2}, C ${event.newWidth} ${event.newHeight / 2}, 0 0, ${event.newWidth} 20`
    });
    this.lines.push({
      fill: 'none',
      stroke: 'purple',
      d: `M 0 ${event.newHeight * 2 / 3}, C ${event.newWidth / 2} ${event.newHeight / 2}, 0 ${event.newHeight}, ${event.newWidth / 2} ${event.newHeight}`
    });
    this.lines.push({
      fill: 'none',
      stroke: 'mediumvioletred',
      d: `M ${event.newWidth * .75} 0, C ${event.newWidth * .67} ${event.newHeight / 2}, ${event.newWidth} ${event.newHeight / 3}, ${event.newWidth} ${event.newHeight * 2 / 3}`
    });
  }
}
