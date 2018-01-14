import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../car.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, OnDestroy {
  carsSubscription: Subscription;
  cars: Car[];
  filteredString = '';

  constructor(private carsService: CarsService) {}

  ngOnInit() {
   this.carsSubscription = this.carsService.carsUpdatedEvent.subscribe(
     (response: Car[]) => {
       this.cars = response;
     }
   );
   this.carsService.updateCars();
  }

  ngOnDestroy() {
    this.carsSubscription.unsubscribe();
  }
}
