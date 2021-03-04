import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  apiKey:string = "21fd5ac3710ae23f3172c9ff88d289bd";
  apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid=apiKey'
getWeather( zip:string) {
  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?`, 
  {params: {zip:zip, appid: this.apiKey }})
}
  
}
