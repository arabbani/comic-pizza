import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaListRoutingModule } from './pizza-list-routing.module';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaFilterComponent } from './pizza-filter/pizza-filter.component';


@NgModule({
  declarations: [PizzaListComponent, PizzaFilterComponent],
  imports: [
    CommonModule,
    PizzaListRoutingModule
  ]
})
export class PizzaListModule { }
