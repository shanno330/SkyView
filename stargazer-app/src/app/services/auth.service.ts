import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  longitude: number = -84.39733;
  latitude: number= 33.775867;
  style:object = {
    moonStyle: "default",
    backgroundStyle: "stars",
    backgroundColor: "#000000",
    headingColor: "#ffffff",
    textColor: "#ffffff",
  };
  date:string = '2021-07-01';
  viewType: string = "portrait-simple"



  ApiKey:string ="73290f26961b4e2c8b1114958210203"
  appID: string ="1cbd5ec2-d5cc-4491-b56c-36dae670755c"
  appSec: string ="29f72c14044b7975bdefaf000e934b54cf404244c6e5e352e3198be48dcc8f78162c324afe9f9d913e78f1760d385b07af32977199bf03fea2f02ad797c44cdbbd7d2ee3df4461664caf8dcee711219c6b9c86ea34085ac4fcec93212470ab0a1976dfa79c17c43157fbc6a5f2e34069"
  hash =btoa(`${this.appID}:${this.appSec}`)

  constructor(private http:HttpClient) { }
  getWetherApi(postal:string):Observable<any>{
    return this.http.get<any>(`https://api.weatherapi.com/v1/forecast.json?`,{
      params: {q:postal, days:"4", key:this.ApiKey}
    })
 }
  moonImage() {
    return this.http.post(`https://api.astronomyapi.com/api/v2/studio/moon-phase`,
    {
      style: this.style,
      observer: {
        latitude: this.latitude,
        longitude: this.longitude,
        date: (this.date),
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
    }
   
    
    
   
  
)
    
  
  



}
}



