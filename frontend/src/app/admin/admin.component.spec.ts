import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from 'q';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { ItemService } from '../item.service';


describe('AdminComponent)', () => {
    
      let comp:    AdminComponent;
      let fixture: ComponentFixture<AdminComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
      let itemServiceStub: Object;
    
      beforeEach(async(() => {
        itemServiceStub = {

        };

        TestBed.configureTestingModule({
            imports: [ 
                FormsModule
            ],
            declarations: [ 
                AdminComponent
            ],
            providers: [ 
                {provide: ItemService, useValue: itemServiceStub}            
            ]
        })
        .compileComponents();  // compile template and css
      }));
      
      beforeEach(() => {
        fixture = TestBed.createComponent(AdminComponent);
        comp = fixture.componentInstance; 
      });

      it('should create the app', async(() => {
        expect(comp).toBeTruthy();
      }));

    });

 