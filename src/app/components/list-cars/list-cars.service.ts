import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListCarsService {
  url = 'http://localhost:4200/data/cars.json';
  constructor(private httpClient: HttpClient) {}

  /**
   * Get all cars
   * @returns Array of Car objects
   */
  getCars(): Observable<object> {
    return this.httpClient.get(`${this.url}`);
  }
}
