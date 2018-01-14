import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Car } from '../cars/car.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  dbUrl = 'http://127.0.0.1:5080/api/cars';

  constructor(private httpClient: HttpClient) {}

  // Get request to the server. Returns an array of cars.
  fetchCars() {
    return this.httpClient.get<Car[]>(this.dbUrl)
      .catch(
        (error) => {
          return Observable.throw('Unable to fetch data from the server');
        }
      );
  }

  // GET request to to the server. Returns an array of car filtered by using params.
  fetchCar(criteria: string) {
    return this.httpClient.get<Car>(this.dbUrl, {
      params: new HttpParams().set('manufacturer', criteria)
    })
    .catch(
      (error) => {
        return Observable.throw('Unable to fetch data from the server');
      }
    );
  }
}

