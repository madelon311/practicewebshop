import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from 'q';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdermodalComponent } from './ordermodal.component';
import { OrdermodalService } from './ordermodal.service';


describe('OrdermodalComponent)', () => {
    
      let comp:    OrdermodalComponent;
      let fixture: ComponentFixture<OrdermodalComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
      let ordermodalServiceStub: Object;
    
      beforeEach(async(() => {
        ordermodalServiceStub = {

        };

        TestBed.configureTestingModule({
            imports: [ 
                FormsModule,
                ReactiveFormsModule,
            ],
            declarations: [ 
                OrdermodalComponent
            ],
            providers: [ 
                {provide: OrdermodalService, useValue: ordermodalServiceStub}            
            ]
        })
        .compileComponents();  // compile template and css
      }));
      
      beforeEach(() => {
        fixture = TestBed.createComponent(OrdermodalComponent);
        comp = fixture.componentInstance; 
      });

      it('should create the app', async(() => {
        expect(comp).toBeTruthy();
      }));

    });

 