import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Car } from '../car.model';

@Pipe({
  name: 'carsFilter'
})
export class CarsFilterPipe implements PipeTransform {

  transform(value: any, filteredString: string, local: boolean): any {
    if (filteredString === '' || !local) {
      return value;
    }

    const newCarsList =  [];
    if (value != null) {
    for (const car of value) {
      if (car.manufacturer.toLowerCase() === filteredString.toLocaleLowerCase()) {
        newCarsList.push(car);
      }
    }
  }
    return newCarsList;
  }
}
