import { Routes } from '@angular/router';
import { Comp202Component } from './components/comp2/comp202/comp202.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: ()=>import('./components/comp1/comp1.routes').then(m=>m.comp1Routes),
  //     }
  //   ],
  // },
  { path: '', component: WeatherComponent, pathMatch:"full"},
  { path: ':locationName', component: WeatherComponent},
  { path: '**', component: Comp202Component },
];
