export interface Cart {
    items: Array<CartItem>
}

export interface CartItem {
    product: String,
    name: String,
    price: number,
    quantity: number,
    id: number
}