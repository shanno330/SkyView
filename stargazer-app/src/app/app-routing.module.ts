import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { StarchartComponent } from './components/starchart/starchart.component';
import { WeatherMoonComponent } from './components/weather-moon/weather-moon.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'weather-moon', component: WeatherMoonComponent },
  { path: 'starchart', component: StarchartComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
