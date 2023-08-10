import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: "any" })
export class WeatherService {
  configUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
getWeatherForCity(city: string): Observable<any> {
  let params = new HttpParams();
  params = params.append('q', city);
  params = params.append('units', 'metric');
  params = params.append('APPID', '695ed9f29c4599b7544d0db5c211d499');
  return this.http.get(this.configUrl, { params: params });
}

}

