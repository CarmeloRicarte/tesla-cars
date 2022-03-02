import { createHttpFactory } from '@ngneat/spectator/jest';
import { HttpMethod, SpectatorHttp } from '@ngneat/spectator';
import { ListCarsService } from './list-cars.service';
describe('ListCarsService', () => {
  let spectator: SpectatorHttp<ListCarsService>;
  const createHttp = createHttpFactory(ListCarsService);

  beforeEach(() => {
    spectator = createHttp();
  });

  test('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  test('should get cars', () => {
    spectator.service.getCars().subscribe();
    spectator.expectOne(`${spectator.service.url}`, HttpMethod.GET);
  });
});
