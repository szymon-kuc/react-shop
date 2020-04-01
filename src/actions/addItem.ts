import { ADD_ITEM } from './types';

export const addNewItem = (item: any) => ({
    type: ADD_ITEM,
    payload: item
})
