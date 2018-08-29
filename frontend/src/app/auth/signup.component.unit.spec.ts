import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

import { SignupComponent } from './signup.component'; 
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('SignupComponent', () => {
  var component: SignupComponent; 
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService(null, null);
    component = new SignupComponent(service, new FormBuilder());
  });

  it('should create a form with 7 controls', () => {
    expect(component.myForm.contains('username')).toBeTruthy();
    expect(component.myForm.contains('password')).toBeTruthy();
    expect(component.myForm.contains('fullname')).toBeTruthy();
    expect(component.myForm.contains('address')).toBeTruthy();
    expect(component.myForm.contains('postalcode')).toBeTruthy();
    expect(component.myForm.contains('city')).toBeTruthy();
    expect(component.myForm.contains('email')).toBeTruthy();
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
  it('should make the fullname control required', () => {
    let control = component.myForm.get('fullname');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
  it('should make the address control required', () => {
    let control = component.myForm.get('address');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
  it('should make the postalcode control required', () => {
    let control = component.myForm.get('postalcode');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
  it('should make the city control required', () => {
    let control = component.myForm.get('city');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
  it('should make the email control required', () => {
    let control = component.myForm.get('email');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should call the server to save the changes when a new user has signed up', () => {
    let spy = spyOn(service, 'signup').and.callFake(t => {
        return Observable.empty();
    });

    component.onSubmit();

    expect(spy).toHaveBeenCalled();
  });
});