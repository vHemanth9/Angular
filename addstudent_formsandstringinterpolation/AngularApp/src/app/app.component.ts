import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    //IMPLEMENT YOUR CODE HERE

    name:string="";
    registernumber:string="";
    age:string="";
    show="";

    addNewStudent(name : string , reg  : string, age : string){
        //FILL YOU CODE HERE
        this.name=name;
        this.registernumber=reg;
        this.age=age;
       this.show=this.name+"-"+this.registernumber+"-"+this.age;
        
    }

  title = 'Student-db';
}
