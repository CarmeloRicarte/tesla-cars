import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { ListCarsComponent } from '../../components/list-cars/list-cars.component';

@NgModule({
  declarations: [HomeComponent, ListCarsComponent],
  imports: [CommonModule, HttpClientModule],
})
export class HomeModule {}
