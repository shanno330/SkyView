import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Search } from '../models/search';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
// weather api
  weather: Search ={
    lat:0,
    lon:0,
    name:'',
    date1:'',
    date2:'',
    date3:'',
    moon_phase1:'',
    moon_phase2:'',
    moon_phase3:'',
    text1: '',
    text2: '',
    text3: '',
    icon1:'',
    icon2:'',
    icon3:'',
    temp_f1: 0,
    temp_f2: 0,
    temp_f3: 0,
    dailyChanceOfRain1: '',
    dailyChanceOfSnow1: '',
    dailyChanceOfRain2: '',
    dailyChanceOfSnow2: '',
    dailyChanceOfRain3: '',
    dailyChanceOfSnow3: ''
  }

// moon api data

  style:object = {
    moonStyle: "default",
    backgroundStyle: "stars",
    backgroundColor: "#000000",
    headingColor: "#ffffff",
    textColor: "#ffffff",
  };

  viewType: string = "portrait-simple"


//weather api
  ApiKey:string ="73290f26961b4e2c8b1114958210203"

  //moon api
  appID: string ="1cbd5ec2-d5cc-4491-b56c-36dae670755c"
  appSec: string ="29f72c14044b7975bdefaf000e934b54cf404244c6e5e352e3198be48dcc8f78162c324afe9f9d913e78f1760d385b07af32977199bf03fea2f02ad797c44cdbbd7d2ee3df4461664caf8dcee711219c6b9c86ea34085ac4fcec93212470ab0a1976dfa79c17c43157fbc6a5f2e34069"
  hash =btoa(`${this.appID}:${this.appSec}`)

  constructor(private http:HttpClient) { }
  getWeatherApi(postal:string):Observable<any>{
    return this.http.get<any>(`https://api.weatherapi.com/v1/forecast.json?`,{
      params: {q:postal, days:"4", key:this.ApiKey}
    })
 }
  moonImage(lat:number,lon:number,date:string) {
    return this.http.post(`https://api.astronomyapi.com/api/v2/studio/moon-phase`,
    {
      style: this.style,
      observer: {
        latitude: lat,
        longitude: lon,
        date: date,
      },
      view: {
        type: this.viewType
      },
    },
    {
      headers: {
        Authorization: `Basic ${btoa(
          `${this.appID}:${this.appSec}`
        )}`
      },
    })
}



starChart(lat:number, lon:number,date:string,cons:string){
  return this.http.post(`https://api.astronomyapi.com/api/v2/studio/star-chart`, {
    style:"navy",
    observer: {
      latitude:lat,
      longitude:lon,
      date: date,
    },
    view: {
      type: "constellation",
      parameters:{
        constellation: cons
      }


    },
  },
  {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Basic ${btoa(
        `${this.appID}:${this.appSec}`
      )}`
    }

  })

}

starChartArea(lat:number,lon:number,date:string, right:number,dec:number){
  return this.http.post(`https://api.astronomyapi.com/api/v2/studio/star-chart`, {
    style:"navy",
    observer: {
      latitude:lat,
      longitude: lon,
      date: date,
    },
    view: {
      type: "area",
      parameters: {
          position: {
              equatorial: {
                  rightAscension:right,
                  declination:dec
              }
          },
          zoom: 3
      },
  },
},
  {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Basic ${btoa(
        `${this.appID}:${this.appSec}`
      )}`
    },

  })



}




}




