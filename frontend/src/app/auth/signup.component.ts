import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(
        private authService: AuthService,
        fb: FormBuilder) {
            this.myForm = fb.group({
                username: ['', Validators.required],
                password: ['', Validators.required],
                fullname: ['', Validators.required],
                address: ['', Validators.required],
                postalcode: ['', Validators.required],
                city: ['', Validators.required],
                email: ['', Validators.required]
              });
        }

    onSubmit() {
        const user = new User(
            this.myForm.value.username,
            this.myForm.value.password,
            this.myForm.value.fullname,
            this.myForm.value.address,
            this.myForm.value.postalcode,
            this.myForm.value.city,
            this.myForm.value.email
        );
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        // this.myForm = new FormGroup({
        //     username: new FormControl(null, Validators.required),
        //     password: new FormControl(null, Validators.required),
        //     fullname: new FormControl(null, Validators.required),
        //     address: new FormControl(null, Validators.required),
        //     postalcode: new FormControl(null, Validators.required),
        //     city: new FormControl(null, Validators.required),
        //     email: new FormControl(null, [
        //         Validators.required,
        //         Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        //     ]),
        // });
    }
}