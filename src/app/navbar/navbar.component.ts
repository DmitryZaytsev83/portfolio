import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ResizedEvent} from 'angular-resize-event';
import {ThemeService} from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavbarComponent implements OnInit {
  @Input() show = false;
  @Output() showChange = new EventEmitter<boolean>();
  public links = [
    {link: '/', name: 'home'},
    {link: '/games', name: 'games'},
    {link: '/projects', name: 'projects'},
  ];
  showMenuButton = false;
  menuClosed = true;
  widthToCollapse = 0;

  constructor(public themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

  onSettings(): void {
    this.show = !this.show;
    this.showChange.emit(this.show);
  }

  onResized(event: ResizedEvent): void {
    const offsetWidth = event.element.nativeElement.offsetWidth;
    const scrollWidth = event.element.nativeElement.scrollWidth;
    if (offsetWidth < this.widthToCollapse && this.showMenuButton) {
      return;
    }
    if (offsetWidth < scrollWidth) {
      this.widthToCollapse = this.widthToCollapse < scrollWidth ? scrollWidth : this.widthToCollapse;
      this.showMenuButton = true;
      this.menuClosed = true;
    } else {
      this.showMenuButton = false;
    }
  }
}
