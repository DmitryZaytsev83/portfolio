import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {GamesComponent} from './games/games.component';
import {FormsModule} from '@angular/forms';
import {SwitcherComponent} from './switcher/switcher.component';
import {AngularResizedEventModule} from 'angular-resize-event';
import { ProjectsComponent } from './projects/projects.component';
import { TripleSwitcherComponent } from './triple-switcher/triple-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GamesComponent,
    SwitcherComponent,
    ProjectsComponent,
    TripleSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularResizedEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
