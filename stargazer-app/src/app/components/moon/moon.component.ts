import { Component, OnInit } from '@angular/core';
import { MoonphasesService } from 'src/app/services/moonphases.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {
  moon: any;

  zipcode:string =''
  constructor(
    private moonphasesService: MoonphasesService,
    private service:WeatherService 
  ) { }

  ngOnInit() {
    // this.moonphasesService.getMoon().subscribe(data => {
    //   this.moon = data


    // });

     this.service.getWeather("49341").subscribe(data =>{
this.moon = data
console.log(this.moon)
     })
  }
}
