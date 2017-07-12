import { Pipe, PipeTransform } from '@angular/core';
import { Merch } from './merch.model';
import { Album } from './album.model';

@Pipe({
  name: 'price',
  pure: false
})

export class PriceFilterPipe implements PipeTransform {

  transform(input: Merch[], desiredPrice){
    var output: Merch[] = [];
    if(desiredPrice === "cheap"){
      for(var i=0; i<input.length; i++){
        if(input[i].price <= 5){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredPrice === "expensive"){
      for(var i=0; i<input.length; i++){
        if(input[i].price > 5){
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }

}
