import { BUY_ITEM, DELETE_ITEM_BASKET, FETCH_ITEMS } from '../actions/types';
let data = localStorage.getItem('data');
let basket: any = [];
basket.push(localStorage.getItem('basket'));

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

export default function reducer(state = {products: [], basket: basket } , { type, payload}: any){
    switch(type){
        case FETCH_ITEMS:
            return {
                ...state,
                products: payload
            };
        case BUY_ITEM:
            return {
                ...state,
                basket: payload
            };
        case DELETE_ITEM_BASKET:
                return {
                    ...state,
                    basket: state.basket.filter((id: string) => id !== payload)
                };
        default:
            return state;
    }
}