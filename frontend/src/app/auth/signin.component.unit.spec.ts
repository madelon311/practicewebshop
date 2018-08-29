import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

import { SigninComponent } from './signin.component'; 
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('SigninComponent', () => {
  var component: SigninComponent; 
  let service: AuthService;
  let router: Router;

  beforeEach(() => {
    service = new AuthService(null, null);
    component = new SigninComponent(service, router, new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.myForm.contains('username')).toBeTruthy();
    expect(component.myForm.contains('password')).toBeTruthy();
  });

  it('should make the username control required', () => {
    let control = component.myForm.get('username');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    let control = component.myForm.get('password');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should call the server to save the changes when a user has signed in', () => {
    let spy = spyOn(service, 'signin').and.callFake(t => {
        return Observable.empty();
    });

    component.onSubmit();

    expect(spy).toHaveBeenCalled();
  });
});