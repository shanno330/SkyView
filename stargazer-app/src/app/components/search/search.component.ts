
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Search } from 'src/app/models/search';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   get weather(): Search {
     return this.authService.weather
   }

   image: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  searchCity(form:NgForm) {
    this.authService.getWeatherApi(form.value.city).subscribe((data:any) =>{
      this.setWeather(data)
      console.log(form.value)
    })
    form.reset;


  }

  setWeather(data:any) {
    this.authService.weather.lat = data.location.lat;
    this.authService.weather.lon = data.location.lon;
    this.authService.weather.name =data.location.name;
    this.authService.weather.date1 =data.forecast.forecastday[0].date;
    this.authService.weather.moon_phase1 =data.forecast.forecastday[0].astro.moon_phase
    this.authService.weather.text1 =data.forecast.forecastday[0].day.condition.text
    this.authService.weather.icon1 =data.forecast.forecastday[0].day.condition.icon
    // this.authService.weather.date =data.forecast.forecastday[1].date;
    // this.authService.weather.moon_phase =data.forecast.forecastday[1].astro.moon_phase
    // this.authService.weather.text =data.forecast.forecastday[1].day.condition.text
    // this.authService.weather.icon =data.forecast.forecastday[1].day.condition.icon
    // this.authService.weather.date =data.forecast.forecastday[2].date;
    // this.authService.weather.moon_phase =data.forecast.forecastday[2].astro.moon_phase
    // this.authService.weather.text =data.forecast.forecastday[2].day.condition.text
    // this.authService.weather.icon =data.forecast.forecastday[2].day.condition.icon

  }

  moonFullImage() {
    this.authService.moonImage( this.weather.lat, this.weather.lon,this.weather.date1 ).subscribe((res:any) =>{
      this.image = res.data.imageUrl;
    console.log(this.weather.lat, this.weather.lon,this.weather.date1,);
    console.log(this.image)
      })

      }






}

