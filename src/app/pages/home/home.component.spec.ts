import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './home.component';
import { ListCarsComponent } from '../../components/list-cars/list-cars.component';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;

  const createComponent = createComponentFactory({
    component: HomeComponent,
    declarations: [ListCarsComponent],
    imports: [ToastModule, HttpClientModule],
    providers: [MessageService],
  });
  beforeEach(() => (spectator = createComponent()));

  test('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  test('should render title', () => {
    expect(spectator.query('h1')?.textContent).toContain(
      'Available model cars of Tesla'
    );
  });

  test('should show a message when output', () => {
    const messageService = spectator.inject(MessageService);
    const spy = jest.spyOn(messageService, 'add');
    spectator.component.showMessage('Model S');
    spectator.detectChanges();
    expect(spy).toBeCalled();
    expect(spectator.query('.p-toast-detail')?.textContent).toContain(
      'Model S'
    );
  });
});
