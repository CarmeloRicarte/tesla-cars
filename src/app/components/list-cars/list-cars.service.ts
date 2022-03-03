import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../models/cars.model';

@Injectable({
  providedIn: 'root',
})
export class ListCarsService {
  url = 'http://localhost:4200/assets/data/cars.json';
  constructor(private httpClient: HttpClient) {}

  /**
   * Get all cars
   * @returns Array of Car objects
   */
  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.url}`);
  }
}
