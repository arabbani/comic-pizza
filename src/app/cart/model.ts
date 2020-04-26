import { Pizza } from '../pizza-list/util/pizza';

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