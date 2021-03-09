import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  quotes: string[] = [
    '"The greatest painting you can look at is a sky full of stars." -Calvin and Hobbes',
    '"For my part I know nothing with any certainty, but the sight of stars makes me dream." -Vincent Van Gogh',
    '"Forget your troubles for a moment and look at the sky." -Unknown',
    '"By the darkness, stars are revealed." -Evette Carter',
    '"The stars are the land-marks of the universe." -Sir John Frederick William Herschel',
    '"Moonlight drowns out all but the brightest stars." -J.R.R. Tolkien',
    '"Only in the darkness can you see the stars." -Martin Luther King Jr.',
    '"I\'ve loved the stars too fondly to be fearful of the night." -Sarah Williams'
  ];

  randomQuote: string= "";

  generateQuote(): void {
    let randomNumber = Math.floor(Math.random() * (this.quotes.length));
    this.randomQuote = this.quotes[randomNumber];
  }

  ngOnInit(): void { 
    this.generateQuote();
  }

}
