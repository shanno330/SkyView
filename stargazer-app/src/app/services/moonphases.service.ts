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

  getMoon() {
    return this.http.get('https://api.astronomyapi.com/api/v2/studio/moon-phase')
  }
}
