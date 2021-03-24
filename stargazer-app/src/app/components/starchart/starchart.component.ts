import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Search } from 'src/app/models/search';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-starchart',
  templateUrl: './starchart.component.html',
  styleUrls: ['./starchart.component.css'],
})
export class StarchartComponent implements OnInit {
  loadingArea: boolean = false;
  loadingConst: boolean = false;
  starConst: any;
  starArea: any;
  filtercons: string = '';
  filterCity: string = '';
  filterCityZipcode: string = '';
  //  filterDec: number= 0;
  //   filterRight: number =0;

  imageLoadingArea() {
    this.loadingArea = !this.loadingArea;
  };

  imageLoadingConst() {
    this.loadingConst = !this.loadingConst;
  }

  constellations: any = [
    { id: 'and', name: 'Andromeda' },
    { id: 'ant', name: 'Antlia' },
    { id: 'aps', name: 'Apus' },
    { id: 'aqr', name: 'Aquarius' },
    { id: 'aql', name: 'Aquila' },
    { id: 'ara', name: 'Ara' },
    { id: 'ari', name: 'Aries' },
    { id: 'aur', name: 'Auriga' },
    { id: 'boo', name: 'Boötes' },
    { id: 'cae', name: 'Caelum' },
    { id: 'cam', name: 'Camelopardalis' },
    { id: 'cnc', name: 'Cancer' },
    { id: 'cvn', name: 'Canes Venatici' },
    { id: 'cma', name: 'Canis Major' },
    { id: 'cmi', name: 'Canis Minor' },
    { id: 'cap', name: 'Capricornus' },
    { id: 'car', name: 'Carina' },
    { id: 'cas', name: 'Cassiopeia' },
    { id: 'cen', name: 'Centaurus' },
    { id: 'cep', name: 'Cepheus' },
    { id: 'cet', name: 'Cetus' },
    { id: 'cha', name: 'Chamaeleon' },
    { id: 'cir', name: 'Circinus' },
    { id: 'col', name: 'Columba' },
    { id: 'com', name: 'Coma Berenices' },
    { id: 'cra', name: 'Corona Austrina' },
    { id: 'crb', name: 'Corona Borealis' },
    { id: 'crv', name: 'Corvus' },
    { id: 'crt', name: 'Crater' },
    { id: 'cru', name: 'Crux' },
    { id: 'cyg', name: 'Cygnus' },
    { id: 'del', name: 'Delphinus' },
    { id: 'dor', name: 'Dorado' },
    { id: 'dra', name: 'Draco' },
    { id: 'equ', name: 'Equuleus' },
    { id: 'eri', name: 'Eridanus' },
    { id: 'for', name: 'Fornax' },
    { id: 'gem', name: 'Gemini' },
    { id: 'gru', name: 'Grus' },
    { id: 'her', name: 'Hercules' },
    { id: 'hor', name: 'Horologium' },
    { id: 'hya', name: 'Hydra' },
    { id: 'hyi', name: 'Hydrus' },
    { id: 'ind', name: 'Indus' },
    { id: 'lac', name: 'Lacerta' },
    { id: 'leo', name: 'Leo' },
    { id: 'lmi', name: 'Leo Minor' },
    { id: 'lep', name: 'Lepus' },
    { id: 'lib', name: 'Libra' },
    { id: 'lup', name: 'Lupus' },
    { id: 'lyn', name: 'Lynx' },
    { id: 'lyr', name: 'Lyra' },
    { id: 'men', name: 'Mensa' },
    { id: 'mic', name: 'Microscopium' },
    { id: 'mon', name: 'Monoceros' },
    { id: 'mus', name: 'Musca' },
    { id: 'nor', name: 'Norma' },
    { id: 'oct', name: 'Octans' },
    { id: 'oph', name: 'Ophiuchus' },
    { id: 'ori', name: 'Orion' },
    { id: 'pav', name: 'Pavo' },
    { id: 'peg', name: 'Pegasus' },
    { id: 'per', name: 'Perseus' },
    { id: 'phe', name: 'Phoenix' },
    { id: 'pic', name: 'Pictor' },
    { id: 'psc', name: 'Pisces' },
    { id: 'psa', name: 'Piscis Austrinus' },
    { id: 'pup', name: 'Puppis' },
    { id: 'pyx', name: 'Pyxis' },
    { id: 'ret', name: 'Reticulum' },
    { id: 'sge', name: 'Sagitta' },
    { id: 'sgr', name: 'Sagittarius' },
    { id: 'sco', name: 'Scorpius' },
    { id: 'scl', name: 'Sculptor' },
    { id: 'sct', name: 'Scutum' },
    { id: 'ser', name: 'Serpens Cauda' },
    { id: 'ser', name: 'Serpens Caput' },
    { id: 'sex', name: 'Sextans' },
    { id: 'tau', name: 'Taurus' },
    { id: 'tel', name: 'Telescopium' },
    { id: 'tri', name: 'Triangulum' },
    { id: 'tra', name: 'Triangulum Australe' },
    { id: 'tuc', name: 'Tucana' },
    { id: 'uma', name: 'Ursa Major' },
    { id: 'umi', name: 'Ursa Minor' },
    { id: 'vel', name: 'Vela' },
    { id: 'vir', name: 'Virgo' },
    { id: 'vol', name: 'Volans' },
    { id: 'vul', name: 'Vulpecula' },
  ];

  get weather() {
    return this.authService.weather;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  setWeather(data: any) {
    this.authService.weather.lat = data.location.lat;
    this.authService.weather.lon = data.location.lon;
    this.authService.weather.name = data.location.name;
    this.authService.weather.date1 = data.forecast.forecastday[0].date;
    this.authService.weather.moon_phase1 =
      data.forecast.forecastday[0].astro.moon_phase;
    this.authService.weather.text1 =
      data.forecast.forecastday[0].day.condition.text;
    this.authService.weather.icon1 =
      data.forecast.forecastday[0].day.condition.icon;
  }

  searchCons() {
    this.authService
      .getWeatherApi(this.filterCityZipcode)
      .subscribe((data: any) => {
        this.setWeather(data);

        console.log(this.filtercons);
        this.authService
          .starChart(
            this.weather.lat,
            this.weather.lon,
            this.weather.date1,
            this.filtercons
          )
          .subscribe((data: any) => {
            this.starConst = data.data.imageUrl;
            console.log(this.starConst);
          });
      });
  }

  searchArea() {
    this.authService.getWeatherApi(this.filterCity).subscribe((data: any) => {
      this.setWeather(data);
      console.log(this.weather.date1);

      this.authService
        .starChartArea(
          this.weather.lat,
          this.weather.lon,
          this.weather.date1,
          10,
          10
        )
        .subscribe((data: any) => {
          this.starArea = data.data.imageUrl;
          console.log(this.weather.lat, this.weather.lon, this.weather.date1);
          console.log(this.starArea);
        });
    });
  }
}
