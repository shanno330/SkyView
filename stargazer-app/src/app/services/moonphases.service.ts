import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoonphasesService {

  constructor(
    private http: HttpClient
  ) { }

  apiKey: string = "1cbd5ec2-d5cc-4491-b56c-36dae670755c"
  const hash = btoa(`${applicationId}:${applicationSecret}`);

  Moon() {
    return this.http.post('https://api.astronomyapi.com/api/v2/studio/moon-phase')
  }

  {
    "format": "png",
    "style": {
        "moonStyle": "sketch",
        "backgroundStyle": "stars",
        "backgroundColor": "red",
        "headingColor": "white",
        "textColor": "red"
    },
    "observer": {
        "latitude": 6.56774,
        "longitude": 79.88956,
        "date": "2020-11-01"
    },
    "view": {
        "type": "portrait-simple"
    }
}
}
