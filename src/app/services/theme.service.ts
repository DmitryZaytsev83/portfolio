import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: number; // 0-system, 1-light, 2-dark
  private glass: boolean;
  private neon: boolean;

  constructor() {
    this.theme = 0;
    this.glass = true;
    this.neon = true;
  }

  getThemeName(): string {
    switch (this.theme) {
      case 1:
        return 'light-theme';
      case 2:
        return 'dark-theme';
      default:
        return window.matchMedia('(prefers-color-scheme: light)').matches ?
          'light-theme' : 'dark-theme';
    }
  }

  isLightTheme(): boolean {
    return this.getThemeName() === 'light-theme';
  }

  isDarkTheme(): boolean {
    return this.getThemeName() === 'dark-theme';
  }

  getTheme(): number {
    return this.theme;
  }

  setTheme(value: number): void {
    this.theme = value;
  }

  getGlass(): boolean {
    return this.glass;
  }

  setGlass(value: boolean): void {
    this.glass = value;
  }

  getNeon(): boolean {
    return this.neon;
  }

  setNeon(value: boolean): void {
    this.neon = value;
  }
}
