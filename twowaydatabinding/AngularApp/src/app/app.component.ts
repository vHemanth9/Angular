import { Component, OnInit, EventEmitter,Output} from '@angular/core';

// Fill you code to import Student.model.ts
import { Student } from './Student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    // Fill your code here
    student:Student=new Student('','',0);
  ngOnInit(): void {
  }
}