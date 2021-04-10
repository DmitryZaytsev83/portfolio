import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CoinGameComponent} from './pages/games/coins/coin-game.component';
import {ProjectsComponent} from './pages/projects/projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'game', component: CoinGameComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
