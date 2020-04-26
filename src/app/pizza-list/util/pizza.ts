export enum PizzaBase {
    regular = 'Regular base',
    thin = 'Thin Crust',
    flat = 'Flat bread',
    multigrain = 'Multigrain'
}

export enum PizzaType {
    cheeseBurst = 'Cheese burst',
    cheeseTopping = 'Cheese topping',
    noCheese = 'No cheese'
}

export enum DishType {
    veg = 'Veg',
    nonVeg = 'Non Veg'
}

export class Pizza {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public base: PizzaBase,
        public type: PizzaType,
        public dishType: DishType,
        public image?: string
    ) { }
}