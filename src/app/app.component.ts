import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.retrieveItems();
  }
}
