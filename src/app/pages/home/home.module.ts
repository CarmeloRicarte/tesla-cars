import { ListCarsComponent } from '../../components/list-cars/list-cars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ListCarsComponent],
  imports: [CommonModule],
})
export class HomeModule {}