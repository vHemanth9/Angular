import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Flight Reservation Form';
  status ="";

  flightClassList:FlightClass[] = [
    //Fill code here
    new FlightClass('First Class'),
    new FlightClass('Second Class'),
    new FlightClass('Economy Class'),
    new FlightClass('Bussiness Class')
  ];

  showStatus() {
    this.status = 'Flight ticket has been booked successfully';
  }
}

export class FlightClass {
  
  name:string;
  
  constructor( name:string) {
    this.name=name;
  }
}
