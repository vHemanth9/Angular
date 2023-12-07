import {Pipe, PipeTransform} from '@angular/core';

//Implement your Code here
@Pipe({
   name:'nameLength'
})

export class ShowLen implements PipeTransform {
   transform(value:string):number {
      return value.length;
   }
   //Implement your Code here
}