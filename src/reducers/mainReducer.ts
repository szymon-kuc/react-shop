import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, BUY_ITEM, DELETE_ITEM_BASKET, FETCH_ITEMS } from '../actions/types';
let data = localStorage.getItem('data');
let basket = localStorage.getItem('basket');
import { I_Product } from '../interfaces'

if(data === null){
    localStorage.setItem('data', JSON.stringify([]));
} else{
    data = JSON.parse(data);
}
if(basket === null){
    localStorage.setItem('basket', JSON.stringify([]));
} else{
    basket = JSON.parse(basket);
}
const product: I_Product = {
    _id: "",
    name: "",
    price: 0,
    amount: 0,
    producer: "",
    description: "",
    status: "",
    date: "",
    img: ""
}

export default function reducer(state = {products: [] } , { type, payload}: any){
    switch(type){
        case FETCH_ITEMS:
            return {
                ...state,
                products: payload
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item: any) => item.id !== payload)
            };
        case EDIT_ITEM:
                return {
                    ...state,
                    items: state.items.map((item: any) => item.id === payload.id ? payload : item)
                };
        case BUY_ITEM:
            return {
                ...state,
                basket: payload
            };
        case DELETE_ITEM_BASKET:
                return {
                    ...state,
                    basket: state.basket.filter((item: any) => item.id !== payload)
                };
        default:
            return state;
    }
}