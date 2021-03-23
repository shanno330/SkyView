import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Search } from 'src/app/models/search';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-weather-moon',
  templateUrl: './weather-moon.component.html',
  styleUrls: ['./weather-moon.component.css'],
})
export class WeatherMoonComponent implements OnInit {
  get weather(): Search {
    return this.authService.weather;
  }
  condition1: string = '';
  condition2: string = '';
  condition3: string = '';
  img1: string =
    'https://i.pinimg.com/originals/9d/43/6e/9d436e6a7194ad0284f3ca92168a8b35.png'; //rainy
  img2: string =
    'https://i.pinimg.com/originals/d1/96/81/d1968147ddd10523ff4ede53dffb2744.jpg'; //snow
  img3: string =
    'https://il6.picdn.net/shutterstock/videos/13752698/thumb/1.jpg'; //clear
  img4: string = 'https://images3.alphacoders.com/704/704427.jpg'; //overcast
  img5: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rKWQAFA0OnhQ0uYzoziQOtg1AqlfMEXo8w&usqp=CAU';
  img6: string = 'https://cdn.wallpapersafari.com/29/51/tQX2Au.jpg'; //partly cloudy
  img7: string =
    'https://www.halesowennews.co.uk/resources/images/6235078.jpg?display=1&htype=0&type=responsive-gallery';
  image1: any;
  image2: any;
  image3: any;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.authService
        .getWeatherApi(queryParams.city)
        .subscribe((data: any) => {
          this.setWeather(data);
          //Day1
          if (this.weather.text1 === 'Overcast') {
            this.condition1 = this.img4;
          } else if (this.weather.text1 === 'Clear') {
            this.condition1 = this.img3;
          } else if (this.weather.text1 === 'Partly cloudy') {
            this.condition1 = this.img6;
          } else if (
            this.weather.text1 === 'Moderate or heavy rain shower' ||
            this.weather.text3 === 'Heavy rain' ||
            this.weather.text1 === 'Moderate rain'
          ) {
            this.condition1 = this.img1;
          } else if (this.weather.text1 === 'Cloudy') {
            this.condition1 = this.img5;
          } else if (this.weather.text1 === 'Patchy rain possible') {
            this.condition1 = this.img7;
          } else {
            this.condition1 = this.img2;
          }

          //Day2
          if (this.weather.text2 === 'Overcast') {
            this.condition2 = this.img4;
          } else if (this.weather.text2 === 'Clear') {
            this.condition2 = this.img3;
          } else if (this.weather.text2 === 'Partly cloudy') {
            this.condition2 = this.img6;
          } else if (
            this.weather.text2 === 'Moderate or heavy rain shower' ||
            this.weather.text2 === 'Heavy rain' ||
            this.weather.text2 === 'Moderate rain'
          ) {
            this.condition2 = this.img1;
          } else if (this.weather.text2 === 'Cloudy') {
            this.condition2 = this.img5;
          } else if (this.weather.text2 === 'Patchy rain possible') {
            this.condition2 = this.img7;
          } else {
            this.condition2 = this.img2;
          }
          //Day3
          if (this.weather.text3 === 'Overcast') {
            this.condition3 = this.img4;
          } else if (this.weather.text3 === 'Clear') {
            this.condition3 = this.img3;
          } else if (this.weather.text3 === 'Partly cloudy') {
            this.condition3 = this.img6;
          } else if (
            this.weather.text3 === 'Moderate or heavy rain shower' ||
            this.weather.text3 === 'Heavy rain' ||
            this.weather.text3 === 'Moderate rain'
          ) {
            this.condition3 = this.img1;
          } else if (this.weather.text3 === 'Cloudy') {
            this.condition3 = this.img5;
          } else if (this.weather.text3 === 'Patchy rain possible') {
            this.condition3 = this.img7;
          } else {
            this.condition3 = this.img2;
          }
          //moon image from astronomy api
          this.authService
            .moonImage(this.weather.lat, this.weather.lon, this.weather.date1)
            .subscribe((data: any) => {
              this.image1 = data.data.imageUrl;
              console.log(this.image1);
            });
          this.authService
            .moonImage(this.weather.lat, this.weather.lon, this.weather.date2)
            .subscribe((data: any) => {
              this.image2 = data.data.imageUrl;
              console.log(this.image2);
            });
          this.authService
            .moonImage(this.weather.lat, this.weather.lon, this.weather.date3)
            .subscribe((data: any) => {
              this.image3 = data.data.imageUrl;
              console.log(this.image3);
            });
        });
    });
  }

  setWeather(data: any) {
    this.authService.weather.name = data.location.name;
    this.authService.weather.lat = data.location.lat;
    this.authService.weather.lon = data.location.lon;
    this.authService.weather.date1 = data.forecast.forecastday[0].date;
    this.authService.weather.temp_f1 =
      data.forecast.forecastday[0].hour[20].temp_f;
    this.authService.weather.text1 =
      data.forecast.forecastday[0].hour[20].condition.text;
    this.authService.weather.dailyChanceOfRain1 =
      data.forecast.forecastday[0].hour[20].chance_of_rain;
    this.authService.weather.dailyChanceOfSnow1 =
      data.forecast.forecastday[0].hour[20].chance_of_snow;
    this.authService.weather.moon_phase2 =
      data.forecast.forecastday[1].astro.moon_phase;
    this.authService.weather.date2 = data.forecast.forecastday[1].date;
    this.authService.weather.temp_f2 =
      data.forecast.forecastday[1].hour[20].temp_f;
    this.authService.weather.text2 =
      data.forecast.forecastday[1].hour[20].condition.text;
    this.authService.weather.dailyChanceOfRain2 =
      data.forecast.forecastday[1].hour[20].chance_of_rain;
    this.authService.weather.dailyChanceOfSnow2 =
      data.forecast.forecastday[1].hour[20].chance_of_snow;
    this.authService.weather.moon_phase3 =
      data.forecast.forecastday[2].astro.moon_phase;
    this.authService.weather.date3 = data.forecast.forecastday[2].date;
    this.authService.weather.temp_f3 =
      data.forecast.forecastday[2].hour[20].temp_f;
    this.authService.weather.text3 =
      data.forecast.forecastday[2].hour[20].condition.text;
    this.authService.weather.dailyChanceOfRain3 =
      data.forecast.forecastday[2].hour[20].chance_of_rain;
    this.authService.weather.dailyChanceOfSnow3 =
      data.forecast.forecastday[2].hour[20].chance_of_snow;
  }
}
