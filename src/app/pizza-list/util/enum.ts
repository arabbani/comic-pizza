import { PizzaBase, PizzaType, DishType } from './pizza';

export interface PizzaFilter {
    price: number,
    base: PizzaBase,
    type: PizzaType,
    dishType: DishType
}