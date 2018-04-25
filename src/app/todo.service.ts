import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TodoService {
  phones = [{ n: 'note8', p: 3000 }, { n: 's8plus', p: 2100 }];
  /*constructor() { }*/

  GetPhones() {
return this.phones;
  }
  constructor(private http: Http) { }

  getWeather(city, country) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=17b1c8913b68544be214a35bf9a3b227');
  }
}
