import { Component, OnInit } from '@angular/core';
import { MoonphasesService } from 'src/app/services/moonphases.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {
  moon: any;
  constructor(
    private moonphasesService: MoonphasesService, 
  ) { }

  ngOnInit() {
    this.moonphasesService.getMoon().subscribe(data => {
      this.moon = data


    });
  }

}
