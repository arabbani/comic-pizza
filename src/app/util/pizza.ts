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

export interface PizzaFilter {
    price: number,
    base: PizzaBase,
    type: PizzaType,
    veg?: boolean
}

export class Pizza {
    constructor(
        public id: Symbol,
        public name: string,
        public price: number,
        public base: PizzaBase,
        public type: PizzaType,
        public veg: boolean,
        public image?: string
    ) { }
}

export let pizzaItems = [
    new Pizza(Symbol(), 'Batman Pizza', 149, PizzaBase.regular, PizzaType.cheeseBurst, true, 'pizza-1.jpg'),
    new Pizza(Symbol(), 'Superman Pizza', 249, PizzaBase.regular, PizzaType.cheeseTopping, false),
    new Pizza(Symbol(), 'Wonder Woman Pizza', 349, PizzaBase.regular, PizzaType.noCheese, true),
    new Pizza(Symbol(), 'Avengers Pizza', 449, PizzaBase.thin, PizzaType.cheeseBurst, false),
    new Pizza(Symbol(), 'Hulk Pizza', 549, PizzaBase.thin, PizzaType.cheeseTopping, true),
    new Pizza(Symbol(), 'Ant Man Pizza', 199, PizzaBase.thin, PizzaType.noCheese, false),
    new Pizza(Symbol(), 'Arrow Pizza', 299, PizzaBase.flat, PizzaType.cheeseBurst, true),
    new Pizza(Symbol(), 'Flash Pizza', 399, PizzaBase.flat, PizzaType.cheeseTopping, false),
    new Pizza(Symbol(), 'Game Of Thrones Pizza', 499, PizzaBase.flat, PizzaType.noCheese, true),
    new Pizza(Symbol(), 'Aquaman Pizza', 599, PizzaBase.multigrain, PizzaType.cheeseBurst, false),
    new Pizza(Symbol(), 'Harry Potter Pizza', 111, PizzaBase.multigrain, PizzaType.cheeseTopping, true),
    new Pizza(Symbol(), 'Inception Pizza', 222, PizzaBase.multigrain, PizzaType.noCheese, false),
    new Pizza(Symbol(), 'Upside Down Pizza', 333, PizzaBase.regular, PizzaType.cheeseBurst, true),
    new Pizza(Symbol(), 'Thor Pizza', 444, PizzaBase.regular, PizzaType.cheeseTopping, false),
    new Pizza(Symbol(), 'Hunger Games Pizza', 555, PizzaBase.regular, PizzaType.noCheese, true),
    new Pizza(Symbol(), '12 Angry Man Pizza', 125, PizzaBase.thin, PizzaType.cheeseBurst, false),
    new Pizza(Symbol(), 'Safe Heaven Pizza', 225, PizzaBase.thin, PizzaType.cheeseTopping, true),
    new Pizza(Symbol(), '3 Idiots Pizza', 325, PizzaBase.thin, PizzaType.noCheese, false),
    new Pizza(Symbol(), 'November Rain Pizza', 425, PizzaBase.flat, PizzaType.cheeseBurst, true),
    new Pizza(Symbol(), 'Stairway To Heaven Pizza', 525, PizzaBase.flat, PizzaType.cheeseTopping, false),
    new Pizza(Symbol(), 'Nothing Else Matters Pizza', 175, PizzaBase.flat, PizzaType.noCheese, true),
    new Pizza(Symbol(), 'Coming Back To Life Pizza', 275, PizzaBase.multigrain, PizzaType.cheeseBurst, false),
    new Pizza(Symbol(), 'Endless River Pizza', 375, PizzaBase.multigrain, PizzaType.cheeseTopping, true),
    new Pizza(Symbol(), 'Heal The World Pizza', 475, PizzaBase.multigrain, PizzaType.noCheese, false),
    new Pizza(Symbol(), 'Hotel California Pizza', 555, PizzaBase.regular, PizzaType.cheeseBurst, true),
    new Pizza(Symbol(), 'Bohemian Rhapsody Pizza', 110, PizzaBase.regular, PizzaType.cheeseTopping, false),
    new Pizza(Symbol(), 'Wrong Turn Pizza', 210, PizzaBase.regular, PizzaType.noCheese, true),
    new Pizza(Symbol(), 'Final Destination Pizza', 310, PizzaBase.thin, PizzaType.cheeseBurst, false),
    new Pizza(Symbol(), 'Letter To Juliet Pizza', 410, PizzaBase.thin, PizzaType.cheeseTopping, true),
    new Pizza(Symbol(), 'Caresless Whisper Pizza', 510, PizzaBase.thin, PizzaType.noCheese, false),
    new Pizza(Symbol(), 'Leave Me Alone Pizza', 140, PizzaBase.flat, PizzaType.cheeseBurst, true),
    new Pizza(Symbol(), 'Man In The Mirror Pizza', 240, PizzaBase.flat, PizzaType.cheeseTopping, false),
    new Pizza(Symbol(), 'OMG Pizza', 340, PizzaBase.flat, PizzaType.noCheese, true),
    new Pizza(Symbol(), 'Angular Pizza', 440, PizzaBase.multigrain, PizzaType.cheeseBurst, false),
    new Pizza(Symbol(), 'HTML Pizza', 540, PizzaBase.multigrain, PizzaType.cheeseTopping, true),
    new Pizza(Symbol(), 'CSS Pizza', 165, PizzaBase.multigrain, PizzaType.noCheese, false),
    new Pizza(Symbol(), 'Javascript Pizza', 265, PizzaBase.regular, PizzaType.cheeseBurst, true),
    new Pizza(Symbol(), 'Typescript Pizza', 365, PizzaBase.regular, PizzaType.cheeseTopping, false),
    new Pizza(Symbol(), 'Sass Pizza', 465, PizzaBase.regular, PizzaType.noCheese, true),
    new Pizza(Symbol(), 'Webpack Pizza', 565, PizzaBase.thin, PizzaType.cheeseBurst, false),
    new Pizza(Symbol(), 'Npm Pizza', 195, PizzaBase.thin, PizzaType.cheeseTopping, true),
    new Pizza(Symbol(), 'Bootstrap Pizza', 295, PizzaBase.thin, PizzaType.noCheese, false),
    new Pizza(Symbol(), 'Material Design Pizza', 395, PizzaBase.flat, PizzaType.cheeseBurst, true),
    new Pizza(Symbol(), 'React Pizza', 495, PizzaBase.flat, PizzaType.cheeseTopping, false),
    new Pizza(Symbol(), 'Vue Pizza', 595, PizzaBase.flat, PizzaType.noCheese, true),
    new Pizza(Symbol(), 'Flutter Pizza', 159, PizzaBase.multigrain, PizzaType.cheeseBurst, false),
    new Pizza(Symbol(), 'Dart Pizza', 259, PizzaBase.multigrain, PizzaType.cheeseTopping, true),
    new Pizza(Symbol(), 'Spring Boot Pizza', 359, PizzaBase.multigrain, PizzaType.noCheese, false),
];
