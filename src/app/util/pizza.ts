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

export class Pizza {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public base: PizzaBase,
        public type: PizzaType,
        public veg: boolean,
        public image?: string
    ) { }
}