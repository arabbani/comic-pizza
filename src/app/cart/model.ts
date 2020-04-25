import { Pizza } from '../util/pizza';

export class CartItem {
    constructor(
        public item: Pizza,
        public quantity: number
    ) { }
}

export class Cart {
    public items: CartItem[];
    public amount: number
}