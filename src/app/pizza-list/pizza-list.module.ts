import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FilteredPizzaComponent } from './filtered-pizza/filtered-pizza.component';
import { PizzaFilterComponent } from './pizza-filter/pizza-filter.component';
import { PizzaListRoutingModule } from './pizza-list-routing.module';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

@NgModule({
  declarations: [PizzaListComponent, PizzaFilterComponent, FilteredPizzaComponent],
  imports: [
    CommonModule,
    PizzaListRoutingModule,
    ReactiveFormsModule
  ]
})
export class PizzaListModule { }
