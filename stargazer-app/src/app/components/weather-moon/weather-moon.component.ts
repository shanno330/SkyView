import { Component, OnInit } from '@angular/core';
import { Search } from 'src/app/models/search';
import { Weather } from 'src/app/models/weather';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-weather-moon',
  templateUrl: './weather-moon.component.html',
  styleUrls: ['./weather-moon.component.css']
})
export class WeatherMoonComponent implements OnInit {
    get weather(): Search {
    return this.authService.weather
 }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getWeatherApi('48101').subscribe((data:any)=>{
      this.authService.weather.name =data.location.name;
      this.authService.weather.temp_f =data.current.temp_f;
      this.authService.weather.text =data.current.condition.text;
      this.authService.weather.date =data.forecast.forecastday[0].date;
      this.authService.weather.dailyChanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
      this.authService.weather.dailyChanceOfSnow = data.forecast.forecastday[0].day.daily_chance_of_snow;

      // this.authService.weather.moon_phase =data.forecast.forecastday[0].astro.moon_phase
      // this.authService.weather.text =data.forecast.forecastday[0].day.condition.text
      // this.authService.weather.icon =data.forecast.forecastday[0].day.condition.icon
      // this.authService.weather.date =data.forecast.forecastday[1].date;
      // this.authService.weather.moon_phase =data.forecast.forecastday[1].astro.moon_phase
      // this.authService.weather.text =data.forecast.forecastday[1].day.condition.text
      // this.authService.weather.icon =data.forecast.forecastday[1].day.condition.icon
      // this.authService.weather.date =data.forecast.forecastday[2].date;
      // this.authService.weather.moon_phase =data.forecast.forecastday[2].astro.moon_phase
      // this.authService.weather.text =data.forecast.forecastday[2].day.condition.text
      // this.authService.weather.icon =data.forecast.forecastday[2].day.condition.icon
      console.log(this.weather);
    })
  }
}
