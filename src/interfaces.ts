export interface I_Shop {
    id: number,
    name: string,
    price: number,
    amount: number,
    producer: string,
    active: number,
    img: string
}

export interface Offer {
    id: number,
    date: string,
    img: string,
    name: string,
    price: number,
    description: string,
    alienor: string,
    status: string
}

export interface I_Product {
    _id: string,
    name: string,
    price: number,
    amount: number,
    producer: string,
    description: string,
    status: string,
    date: string,
    img: string,
}