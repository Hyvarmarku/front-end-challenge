import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Car } from '../cars/car.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  constructor(private httpClient: HttpClient) {}

  // Get request to the server. Returns an array of cars.
  fetchCars() {
    return this.httpClient.get<Car[]>('http://127.0.0.1:5080/api/cars')
      .catch(
        (error) => {
          return Observable.throw('Unable to fetch data from the server');
        }
      );
  }

  // GET request to to the server. Returns a car based on criteria.
  fetchCar(criteria: string) {

  }
}

