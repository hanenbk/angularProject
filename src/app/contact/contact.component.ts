import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
c='';
  constructor() { }

  ngOnInit() {
  }

  testContact(){
    this.c='bonjour';
  }
}
