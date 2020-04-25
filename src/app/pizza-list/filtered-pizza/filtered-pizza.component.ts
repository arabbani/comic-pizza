import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { Pizza } from 'src/app/util/pizza';
import { PizzaService } from 'src/app/util/service/pizza.service';

@Component({
  selector: 'sb-filtered-pizza',
  templateUrl: './filtered-pizza.component.html',
  styleUrls: ['./filtered-pizza.component.scss']
})
export class FilteredPizzaComponent implements OnInit {

  private cartItemsId: Symbol[] = [];

  pizzaItems$: Observable<Pizza[]>;

  constructor(private pizzaService: PizzaService, private cartService: CartService) { }

  ngOnInit(): void {
    this.pizzaItems$ = this.pizzaService.filteredPizza$;
  }

  addToCart(pizza: Pizza): void {
    this.cartItemsId.push(pizza.id);
    this.cartService.addItem(pizza);
  }

  removeFromCart(pizza: Pizza): void {
    this.cartItemsId = this.cartItemsId.filter(item => item !== pizza.id);
    this.cartService.removeItem(pizza);
  }

  addedToCart(pizza): boolean {
    return this.cartItemsId.includes(pizza.id);
  }

}
