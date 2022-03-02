import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  getCars() {
    return this.httpClient.get(`${this.url}`);
  }
}
