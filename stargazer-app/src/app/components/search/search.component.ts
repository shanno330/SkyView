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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  searchCity(city:string) {
    
    this.authService.getWeatherApi(city).subscribe((data:any) =>{
      this.setWeather(data) 
      
    })

  }

  setWeather(data:any) {
    this.authService.weather.lat = data.location.lat;
    this.authService.weather.lon = data.location.lon;
    this.authService.weather.name =data.location.name;
  }

}
