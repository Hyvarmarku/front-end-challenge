import { Component, OnInit } from '@angular/core';
import { trigger, query, style, stagger, keyframes, transition, animate } from '@angular/animations';

import { CarsService } from '../cars.service';
import { Car } from '../car.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
  animations: [
    trigger('moveInOut', [

      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class CarsListComponent implements OnInit, OnDestroy {
  carsSubscription: Subscription;
  cars: Car[];
  filteredString = '';
  localFilter = true;

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

  filter(s: string) {
    if (!this.localFilter) {
      this.carsService.getCarFromServer(s);
    }
  }

  onCheck() {
    this.localFilter = !this.localFilter;
  }
}
