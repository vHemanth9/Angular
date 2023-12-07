import { Component } from '@angular/core';
import { Student } from './Student.model';
//IMPORT STUDENT MODEL CLASS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // student:any ; //Assign the Student details to the variable student which is type Student[].
  student:Student[]=[
    {name:"Sam",registerNumber:"RS200",age:21},
    {name:"Jhon",registerNumber:"ST001",age:22},
    {name:"Ram",registerNumber:"RS021",age:23},
    {name:"Angel",registerNumber:"AN021",age:20}
  ]

  
  title = 'Student-db';
}
