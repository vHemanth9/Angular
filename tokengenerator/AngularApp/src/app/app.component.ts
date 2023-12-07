//Implement Your Code Here

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Implement code here
  token = 100;
  
  constructor() { }

  clicked() {
       
        this.token++;
        
  }

  title = 'Token Generator';
}
