import {RouterStateSnapshot, Resolve,  ActivatedRouteSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { Car } from '../car.model';
import { Observable } from 'rxjs/Rx';
import { CarsService } from '../cars.service';

@Injectable()
export class CarDetailResolver implements Resolve<Car> {
  constructor(private carsService: CarsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Car | Observable<Car> | Promise<Car> {
    const id = +route.params['id'];

    return this.carsService.getCar(id)
      .then(car => {
        if (car) {
          return car;
        } else {
          this.router.navigate(['cars']);
          return;
        }
      });
  }
}
