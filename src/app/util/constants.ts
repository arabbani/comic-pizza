import { Pizza, PizzaBase, PizzaType } from './pizza';

export let pizzaItems = [
    new Pizza(1, 'Batman Pizza', 149, PizzaBase.regular, PizzaType.cheeseBurst, true, 'pizza-1.jpg'),
    new Pizza(2, 'Superman Pizza', 249, PizzaBase.regular, PizzaType.cheeseTopping, false, 'pizza-1.jpg'),
    new Pizza(3, 'Wonder Woman Pizza', 349, PizzaBase.regular, PizzaType.noCheese, true, 'pizza-1.jpg'),
    new Pizza(4, 'Avengers Pizza', 449, PizzaBase.thin, PizzaType.cheeseBurst, false, 'pizza-1.jpg'),
    new Pizza(5, 'Hulk Pizza', 549, PizzaBase.thin, PizzaType.cheeseTopping, true, 'pizza-1.jpg'),
    new Pizza(6, 'Ant Man Pizza', 199, PizzaBase.thin, PizzaType.noCheese, false, 'pizza-1.jpg'),
    new Pizza(7, 'Arrow Pizza', 299, PizzaBase.flat, PizzaType.cheeseBurst, true, 'pizza-1.jpg'),
    new Pizza(8, 'Flash Pizza', 399, PizzaBase.flat, PizzaType.cheeseTopping, false, 'pizza-1.jpg'),
    new Pizza(9, 'Game Of Thrones Pizza', 499, PizzaBase.flat, PizzaType.noCheese, true, 'pizza-1.jpg'),
    new Pizza(10, 'Aquaman Pizza', 599, PizzaBase.multigrain, PizzaType.cheeseBurst, false, 'pizza-1.jpg'),
    new Pizza(11, 'Harry Potter Pizza', 111, PizzaBase.multigrain, PizzaType.cheeseTopping, true, 'pizza-1.jpg'),
    new Pizza(12, 'Inception Pizza', 222, PizzaBase.multigrain, PizzaType.noCheese, false, 'pizza-1.jpg'),
    new Pizza(13, 'Upside Down Pizza', 333, PizzaBase.regular, PizzaType.cheeseBurst, true, 'pizza-1.jpg'),
    new Pizza(14, 'Thor Pizza', 444, PizzaBase.regular, PizzaType.cheeseTopping, false, 'pizza-1.jpg'),
    new Pizza(15, 'Hunger Games Pizza', 555, PizzaBase.regular, PizzaType.noCheese, true, 'pizza-1.jpg'),
    new Pizza(16, '12 Angry Man Pizza', 125, PizzaBase.thin, PizzaType.cheeseBurst, false, 'pizza-1.jpg'),
    new Pizza(17, 'Safe Heaven Pizza', 225, PizzaBase.thin, PizzaType.cheeseTopping, true, 'pizza-1.jpg'),
    new Pizza(18, '3 Idiots Pizza', 325, PizzaBase.thin, PizzaType.noCheese, false, 'pizza-1.jpg'),
    new Pizza(19, 'November Rain Pizza', 425, PizzaBase.flat, PizzaType.cheeseBurst, true, 'pizza-1.jpg'),
    new Pizza(20, 'Stairway To Heaven Pizza', 525, PizzaBase.flat, PizzaType.cheeseTopping, false, 'pizza-1.jpg'),
    new Pizza(21, 'Nothing Else Matters Pizza', 175, PizzaBase.flat, PizzaType.noCheese, true, 'pizza-1.jpg'),
    new Pizza(22, 'Coming Back To Life Pizza', 275, PizzaBase.multigrain, PizzaType.cheeseBurst, false, 'pizza-1.jpg'),
    new Pizza(23, 'Endless River Pizza', 375, PizzaBase.multigrain, PizzaType.cheeseTopping, true, 'pizza-1.jpg'),
    new Pizza(24, 'Heal The World Pizza', 475, PizzaBase.multigrain, PizzaType.noCheese, false, 'pizza-1.jpg'),
    new Pizza(25, 'Hotel California Pizza', 555, PizzaBase.regular, PizzaType.cheeseBurst, true, 'pizza-1.jpg'),
    new Pizza(26, 'Bohemian Rhapsody Pizza', 110, PizzaBase.regular, PizzaType.cheeseTopping, false, 'pizza-1.jpg'),
    new Pizza(27, 'Wrong Turn Pizza', 210, PizzaBase.regular, PizzaType.noCheese, true, 'pizza-1.jpg'),
    new Pizza(28, 'Final Destination Pizza', 310, PizzaBase.thin, PizzaType.cheeseBurst, false, 'pizza-1.jpg'),
    new Pizza(29, 'Letter To Juliet Pizza', 410, PizzaBase.thin, PizzaType.cheeseTopping, true, 'pizza-1.jpg'),
    new Pizza(30, 'Caresless Whisper Pizza', 510, PizzaBase.thin, PizzaType.noCheese, false, 'pizza-1.jpg'),
    new Pizza(31, 'Leave Me Alone Pizza', 140, PizzaBase.flat, PizzaType.cheeseBurst, true, 'pizza-1.jpg'),
    new Pizza(32, 'Man In The Mirror Pizza', 240, PizzaBase.flat, PizzaType.cheeseTopping, false, 'pizza-1.jpg'),
    new Pizza(33, 'OMG Pizza', 340, PizzaBase.flat, PizzaType.noCheese, true, 'pizza-1.jpg'),
    new Pizza(34, 'Angular Pizza', 440, PizzaBase.multigrain, PizzaType.cheeseBurst, false, 'pizza-1.jpg'),
    new Pizza(35, 'HTML Pizza', 540, PizzaBase.multigrain, PizzaType.cheeseTopping, true, 'pizza-1.jpg'),
    new Pizza(36, 'CSS Pizza', 165, PizzaBase.multigrain, PizzaType.noCheese, false, 'pizza-1.jpg'),
    new Pizza(37, 'Javascript Pizza', 265, PizzaBase.regular, PizzaType.cheeseBurst, true, 'pizza-1.jpg'),
    new Pizza(38, 'Typescript Pizza', 365, PizzaBase.regular, PizzaType.cheeseTopping, false, 'pizza-1.jpg'),
    new Pizza(39, 'Sass Pizza', 465, PizzaBase.regular, PizzaType.noCheese, true, 'pizza-1.jpg'),
    new Pizza(40, 'Webpack Pizza', 565, PizzaBase.thin, PizzaType.cheeseBurst, false, 'pizza-1.jpg'),
    new Pizza(41, 'Npm Pizza', 195, PizzaBase.thin, PizzaType.cheeseTopping, true, 'pizza-1.jpg'),
    new Pizza(42, 'Bootstrap Pizza', 295, PizzaBase.thin, PizzaType.noCheese, false, 'pizza-1.jpg'),
    new Pizza(43, 'Material Design Pizza', 395, PizzaBase.flat, PizzaType.cheeseBurst, true, 'pizza-1.jpg'),
    new Pizza(44, 'React Pizza', 495, PizzaBase.flat, PizzaType.cheeseTopping, false, 'pizza-1.jpg'),
    new Pizza(45, 'Vue Pizza', 595, PizzaBase.flat, PizzaType.noCheese, true, 'pizza-1.jpg'),
    new Pizza(46, 'Flutter Pizza', 159, PizzaBase.multigrain, PizzaType.cheeseBurst, false, 'pizza-1.jpg'),
    new Pizza(47, 'Dart Pizza', 259, PizzaBase.multigrain, PizzaType.cheeseTopping, true, 'pizza-1.jpg'),
    new Pizza(48, 'Spring Boot Pizza', 359, PizzaBase.multigrain, PizzaType.noCheese, false, 'pizza-1.jpg'),
];