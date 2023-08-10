import {
  Observable,
  map,
  filter,
  concatMap,
  combineLatest,
  switchMap,
  of,
  tap,
  delay,
} from 'rxjs';
import { WeatherService } from './../../core/services/api.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatCardModule,
  ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  data$!: Observable<any>;
  cities$! :Observable<string[]>;
  countries = [
    {
      name: 'United Kingdom',
      cities: ['London', 'Warwick', 'Birmingham'],
    },
    {
      name: 'United States',
      cities: ['New York', 'Chicago', 'Washington'],
    },
    {
      name: 'Australia',
      cities: ['Sydney', 'Adelaide', 'Melbourne'],
    },
    {
      name: 'Pakistan',
      cities: ['Lahore', 'Karachi', 'Islamabad'],
    },
  ];
  cities = ['London', 'Paris', 'Moscow', 'New York', 'Karachi', 'Sydney'];
  public countryControl!: FormControl;
  public cityControl!: FormControl;

  constructor(
    private route: ActivatedRoute,
    private weather: WeatherService,
    private router: Router
  ) {}
  ngOnInit() {
    this.countryControl = new FormControl('');

    this.cityControl = new FormControl('');
    this.cityControl.valueChanges.subscribe((value) => {
      this.router.navigate([value]);
    });
    this.cities$ = this.countryControl.valueChanges.pipe(
      map((country) => country.cities)
    );

    this.data$ = this.route.params.pipe(
      map((params) => params['locationName']),
      filter((name: string) => !!name),
      concatMap((name: string) => {
        return this.weather.getWeatherForCity(name).pipe(
          map((weatherData) => {
            weatherData.image = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            return weatherData;
          }),
          delay(500)
        );
      })
    );
  }
}
