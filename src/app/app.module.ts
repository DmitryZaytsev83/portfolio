import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CoinGameComponent} from './pages/games/coins/coin-game.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SwitcherComponent} from './components/switcher/switcher.component';
import {AngularResizedEventModule} from 'angular-resize-event';
import {ProjectsComponent} from './pages/projects/projects.component';
import {TripleSwitcherComponent} from './components/triple-switcher/triple-switcher.component';
import {SettingsComponent} from './components/settings/settings.component';
import {ContactComponent} from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CoinGameComponent,
    SwitcherComponent,
    ProjectsComponent,
    TripleSwitcherComponent,
    SettingsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularResizedEventModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
