import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {

  image: any;

  zipcode:string =''
  constructor(
     private AuthService:AuthService 
  ) { }

  ngOnInit() {
     this.AuthService.moonImage().subscribe((res:any) =>{
      this.image = res.data.imageUrl;
      console.log(this.image)
    })

  }
}
