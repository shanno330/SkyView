
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Search } from 'src/app/models/search';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  searchPlace(form:NgForm) {
    console.log(form.value);
    this.router.navigate(["weather-moon"],{
      queryParams: { city: form.value.city }
    }
    
      
    );
    form.reset;
  }



  }

  








