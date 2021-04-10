import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SettingsComponent implements OnInit {

  constructor(public themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

}
