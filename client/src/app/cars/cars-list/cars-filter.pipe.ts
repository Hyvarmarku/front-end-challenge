import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Car } from '../car.model';

@Pipe({
  name: 'carsFilter'
})
export class CarsFilterPipe implements PipeTransform {

  transform(value: any, filteredString: string): any {
    let newCarsList =  [];
    if (value != null) {
    for (const car of value) {
      if (car.manufacturer === filteredString) {
        newCarsList.push(car);
      }
    }
  }

  if (filteredString === '') {
    newCarsList = value;
  }
    return newCarsList;
  }
}
