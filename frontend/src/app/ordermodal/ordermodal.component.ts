import { Component, OnInit } from '@angular/core';
import { OrdermodalService } from './ordermodal.service';

@Component({
    selector: 'app-ordermodal',
    templateUrl: './ordermodal.component.html',
    styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `]
})
export class OrdermodalComponent implements OnInit {
    display = 'none';

    constructor(private ordermodalService: OrdermodalService) {}

    onOrderAdded() {
        this.display = 'none';
    }

    ngOnInit() {
        this.ordermodalService.orderAdded
            .subscribe(
                () => {
                    this.display = 'block';
                }
            );
    }
}