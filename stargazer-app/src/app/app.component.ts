import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stargazer-app';

  constructor(private authService: AuthService) {}

  // ngOnInit() {
  //   this.authService.getWeatherApi('48101').subscribe((data:any) =>{
  //       console.log(data);
  //   } )
  // }
}
