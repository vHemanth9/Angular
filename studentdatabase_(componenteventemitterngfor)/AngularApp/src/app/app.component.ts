//Implement your code here
import { Component,Input } from '@angular/core';
import { Student } from './Student.model';
//Import Student model class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Implement your code here
  student:Student[] =[
    new Student('Sam','RS200',21),
    new Student('John','ST001',22),
    new Student('Angle','AN021',20)
  ];
    constructor(){

    }
    addStudent(student:Student){
      this.student.push(student);
    }

    title = 'Student-db';
}
	 	  	  		  	     	     	       	 	
