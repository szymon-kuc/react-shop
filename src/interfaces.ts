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