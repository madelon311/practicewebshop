import { ErrorComponent } from './error.component'; 
import { ErrorService } from './error.service';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let service: ErrorService;

  beforeEach(() => {
    component = new ErrorComponent(service);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set display to none when error is handled', () => {
    component.onErrorHandled();
    
    expect(component.display).toBe('none');
  });

});