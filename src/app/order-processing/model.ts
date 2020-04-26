export class BillingInfo {
    constructor(
        public cardNumber: number,
        public nameOnCard: string,
        public cvv: number,
        public expiryMonth: number,
        public expiryYear: number
    ) { }
}

export class CheckoutInfo {
    constructor(
        public name: string,
        public contactNumber: number,
        public address: string,
        public city: string,
        public state: string,
        public pincode: number,
        public billinInfo?: BillingInfo
    ) { }
}