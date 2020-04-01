import { DELETE_ITEM_BASKET } from './types';

export const deleteItemBasket = (id: any) => ({
    type: DELETE_ITEM_BASKET,
    payload: id
})
