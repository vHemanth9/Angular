import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //IMPLEMENT YOUR CODE HERE
    title = 'Profile Details';

    editMode = true;

    profile = {
      name:"John",
      mail:"John@gmail.com",
      contact:"123456789"
    };

    toggleEditMode(){
      this.editMode=!this.editMode;
    }
    
    saveProfile(){
      this.editMode=true;
    }


}
