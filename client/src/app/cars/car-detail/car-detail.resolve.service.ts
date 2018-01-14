import {RouterStateSnapshot, Resolve,  ActivatedRouteSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { Car } from '../car.model';
import { Observable } from 'rxjs/Rx';
import { CarsService } from '../cars.service';

@Injectable()
export class CarDetailResolver implements Resolve<Car> {
  constructor(private carsService: CarsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Car | Observable<Car> | Promise<Car> {
    const id = +route.params['id'];

    return this.carsService.getCar(id)
      .then(car => {
        if (car) {
          return car;
        } else { return; }
      });
  }
}
