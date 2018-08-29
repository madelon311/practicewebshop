import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from 'q';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { AuthService } from './auth.service';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';


describe('SigninComponent)', () => {
    
      let comp:    SigninComponent;
      let fixture: ComponentFixture<SigninComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
      let authServiceStub: Object;
    
      beforeEach(async(() => {
        authServiceStub = {

        };

        TestBed.configureTestingModule({
            imports: [ 
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([
                    {path: '', redirectTo: '/signup', pathMatch: 'full'},
                    {path: 'signup', component: SignupComponent},
                    {path: 'signin', component: SigninComponent},
                    {path: 'logout', component: LogoutComponent}
                ])
            ],
            declarations: [ 
                AuthenticationComponent,
                SignupComponent,
                SigninComponent,
                LogoutComponent
            ],
            providers: [ 
                {provide: AuthService, useValue: authServiceStub}            
            ]
        })
        .compileComponents();  // compile template and css
      }));
      
      beforeEach(() => {
        fixture = TestBed.createComponent(SigninComponent);
        comp = fixture.componentInstance; 
      });

      it('should create the app', async(() => {
        expect(comp).toBeTruthy();
      }));

    });

 