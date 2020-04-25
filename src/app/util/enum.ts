import { PizzaBase, PizzaType } from './pizza';

export interface PizzaFilter {
    price: number,
    base: PizzaBase,
    type: PizzaType,
    veg?: boolean
}