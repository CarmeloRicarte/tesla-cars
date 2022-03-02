import { ListCarsComponent } from '../../components/list-cars/list-cars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, ListCarsComponent],
  imports: [CommonModule, HttpClientModule],
})
export class HomeModule {}
