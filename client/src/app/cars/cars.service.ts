import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { ServerService } from '../shared/server.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CarsService {
  carsUpdatedEvent = new Subject<Car[]>();
  private cars: Car[] = [];

  constructor(private serverService: ServerService) {}

  // Fetches cars from the database and launches an event.
  updateCars() {
    this.serverService.fetchCars().subscribe(
      (response: Car[]) => {
        this.cars = response;
        this.carsUpdatedEvent.next(this.cars);
      },
      error => console.log('error')
    );
  }

  getCars() {
    return this.cars;
  }

  // Returns a promise which either returns car from pre-loaded cars -list, or fetches the list from
  // database and returns the result, based on if the cars -list has been created or not.
  getCar(index: number) {
    const carPromise = new Promise<Car>((resolve, reject) => {
      if (this.cars.length !== 0) {
        resolve(this.cars[index]);
      } else {
        this.serverService.fetchCars()
          .subscribe(
            (result: Car[]) => {
              resolve(result[index]);
            },
            error => resolve(new Car())
          );
      }
    });

    return carPromise;
  }
}
