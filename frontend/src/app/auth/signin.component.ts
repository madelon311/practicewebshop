import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;

    constructor(
        private authService: AuthService, 
        private router: Router,
        fb: FormBuilder
    ) {
        this.myForm = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
          });
    }

    onSubmit() {
        const user = new User(this.myForm.value.username, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        // this.myForm = new FormGroup({
        //     username: new FormControl(null, Validators.required),
        //     password: new FormControl(null, Validators.required)
        // });
    }
}