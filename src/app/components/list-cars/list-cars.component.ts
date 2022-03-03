import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Car } from '../../models/cars.model';
import { ListCarsService } from './list-cars.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss'],
})
export class ListCarsComponent implements OnInit, OnDestroy {
  cars: Car[] = [];
  @Output() clickElement: EventEmitter<string> = new EventEmitter();

  constructor(protected service: ListCarsService) {}

  ngOnInit(): void {
    this.getCars();
  }

  ngOnDestroy(): void {
    this.getCars().unsubscribe();
  }

  getCars(): Subscription {
    return this.service.getCars().subscribe({
      next: (cars) => {
        this.cars = cars;
      },
    });
  }

  onClickElement(element: string) {
    this.clickElement.emit(`Acabas de hacer click en el elemento: ${element}`);
  }
}
