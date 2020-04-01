import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, BUY_ITEM, DELETE_ITEM_BASKET } from '../actions/types';
let data = localStorage.getItem('data');
let basket = localStorage.getItem('basket');

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

export default function reducer(state: any ={items: data, basket: basket} , { type, payload}: any){
    switch(type){
        case ADD_ITEM:
            return {
                ...state,
                items: payload
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