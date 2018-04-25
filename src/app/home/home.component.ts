import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myPhone = 's8plus';
  price = 600;

 // phones = [{ n: 'note8', p: 3000 }, { n: 's8plus', p: 2100 }];
 phones;
 data;

  city;
  country;
  b = true;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.phones = this.todoService.GetPhones();
  }
  addBtn() {
    this.phones.push({n : this.myPhone, p : this.price});
    /*this.myPhone = this.myPhone + '1';*/
  }
  getWeatherBtn() {
    this.todoService.getWeather(this.city, this.country).subscribe(res => {
      console.log(res.status);
      console.log(res.json().weather[0].description);
      this.data = res.json().weather[0].description;
    });

    console.log('weather btn presed');


  }
  /*attribute binding*/
  enableInput() {
this.b = !this.b;
  }
}
