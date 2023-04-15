import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appointment = "2023-11-21T18:00:30";
difference:any;
seconds:any;
  constructor() {
    let difference = Math.abs(new Date().getTime() - new Date(this.appointment).getTime());
    var seconds = difference / 1000;
    var minutes = difference / 1000 / 60;
    var hours = minutes / 60;

    console.log("Difference in Hours",hours)
    console.log("Difference in minutes",minutes)
    console.log("Difference in seconds",seconds)
  }
}
  