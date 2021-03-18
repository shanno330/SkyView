import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
 image1:any;
 image2:any;
 image3:any;


  constructor(private authService: AuthService, private  route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.authService.getWeatherApi(queryParams.city).subscribe((data: any) => {
        this.setWeather(data);
    // this.authService.getWeatherApi(form.value.city).subscribe((data:any)=>{
      // this.setWeather(data);
      this.authService.moonImage( this.weather.lat, this.weather.lon, this.weather.date1).subscribe((data: any)=>{
      this.image1 = data.data.imageUrl;
      console.log(this.image1)
      })
      this.authService.moonImage( this.weather.lat, this.weather.lon, this.weather.date2).subscribe((data: any)=>{
      this.image2 = data.data.imageUrl;
      console.log(this.image2)
      })
      this.authService.moonImage( this.weather.lat, this.weather.lon, this.weather.date3).subscribe((data: any)=>{
      this.image3 = data.data.imageUrl;
      console.log(this.image3)
          })
    
        })
    
  })
}

// searchDate(form:NgForm){
//   this.authService.getWeatherApi(form.value.city).subscribe((data:any)=>{
//   this.setWeather(data);
//   this.authService.moonImage( this.weather.lat, this.weather.lon, this.weather.date1).subscribe((data: any)=>{
//   this.image1 = data.data.imageUrl;
//   console.log(this.image1)
//   })
//   this.authService.moonImage( this.weather.lat, this.weather.lon, this.weather.date2).subscribe((data: any)=>{
//   this.image2 = data.data.imageUrl;
//   console.log(this.image2)
//   })
//   this.authService.moonImage( this.weather.lat, this.weather.lon, this.weather.date3).subscribe((data: any)=>{
//   this.image3 = data.data.imageUrl;
//   console.log(this.image3)
//       })

//     })
//   }

setWeather(data:any){
   this.authService.weather.name = data.location.name;
   this.authService.weather.lat = data.location.lat;
   this.authService.weather.lon =data.location.lon;
   this.authService.weather.date1 = data.forecast.forecastday[0].date
   this.authService.weather.temp_f1 =data.forecast.forecastday[0].hour[20].temp_f;
   this.authService.weather.text1 =data.forecast.forecastday[0].hour[20].condition.text;
   this.authService.weather.dailyChanceOfRain1=data.forecast.forecastday[0].hour[20].chance_of_rain;
   this.authService.weather.dailyChanceOfSnow1=data.forecast.forecastday[0].hour[20].chance_of_snow;
   this.authService.weather.moon_phase2 =data.forecast.forecastday[1].astro.moon_phase;
   this.authService.weather.date2 = data.forecast.forecastday[1].date
   this.authService.weather.temp_f2 =data.forecast.forecastday[1].hour[20].temp_f;
   this.authService.weather.text2 =data.forecast.forecastday[1].hour[20].condition.text;
   this.authService.weather.dailyChanceOfRain2=data.forecast.forecastday[1].hour[20].chance_of_rain;
   this.authService.weather.dailyChanceOfSnow2=data.forecast.forecastday[1].hour[20].chance_of_snow;
   this.authService.weather.moon_phase3 =data.forecast.forecastday[2].astro.moon_phase;
   this.authService.weather.date3 = data.forecast.forecastday[2].date
   this.authService.weather.temp_f3 =data.forecast.forecastday[2].hour[20].temp_f;
   this.authService.weather.text3 =data.forecast.forecastday[2].hour[20].condition.text;
   this.authService.weather.dailyChanceOfRain3=data.forecast.forecastday[2].hour[20].chance_of_rain;
   this.authService.weather.dailyChanceOfSnow3=data.forecast.forecastday[2].hour[20].chance_of_snow;

}





}
