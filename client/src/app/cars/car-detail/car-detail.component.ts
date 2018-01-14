import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Car, Quality } from '../car.model';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car = new Car();
  id: number;

  constructor(private CarsService: CarsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { car: Car}) => {
        this.car = data.car;
      });
  }

  getRating(index: number, quality: Quality) {
    if (index <= quality.rating) {
      return 'active-star';
    }
    return '';
  }
}
