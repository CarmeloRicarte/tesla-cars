import { HttpClientModule } from '@angular/common/http';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { ListCarsComponent } from './list-cars.component';
import { ListCarsService } from './list-cars.service';

describe('ListCarsComponent', () => {
  let spectator: Spectator<ListCarsComponent>;

  const createComponent = createComponentFactory({
    component: ListCarsComponent,
    imports: [HttpClientModule],
  });
  beforeEach(() => (spectator = createComponent()));

  test('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  test('should have a title', () => {
    expect(spectator.query('h2')).toHaveText('List of Cars');
  });

  test('should call get cars', (done) => {
    const service = spectator.inject(ListCarsService);
    const spy = jest.spyOn(service, 'getCars').mockReturnValue(
      of([
        {
          name: 'Model S',
        },
      ])
    );
    spectator.component.getCars();
    expect(spy).toBeCalled();
    done();
  });

  test('should get a list of cars', (done) => {
    const service = spectator.inject(ListCarsService);
    jest.spyOn(service, 'getCars').mockReturnValue(
      of([
        {
          name: 'Model S',
        },
      ])
    );
    spectator.component.getCars();
    expect(spectator.component.cars).toEqual([
      {
        name: 'Model S',
      },
    ]);
    done();
  });

  test('should call onClickElement', (done) => {
    const spy = jest.spyOn(spectator.component, 'onClickElement');
    spectator.component.onClickElement('Model S');
    expect(spy).toBeCalled();
    done();
  });

  test('should emit clickElement', (done) => {
    const spy = jest.spyOn(spectator.component.clickElement, 'emit');
    spectator.component.onClickElement('Model S');
    expect(spy).toBeCalledWith('Acabas de hacer click en el elemento: Model S');
    done();
  });

  test('should get child elements with no children inside that have strong class', () => {
    const cars = [
      {
        name: 'Model S',
        types: [
          {
            package: 'Plaid',
            price: 20000,
          },
        ],
      },
    ];
    spectator.component.cars = cars;
    spectator.detectChanges();
    expect(spectator.queryAll('div > div .strong')).toHaveLength(1);
  });
});
