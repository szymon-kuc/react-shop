import { DELETE_ITEM } from './types';

export const deleteItem = (id: any) => ({
    type: DELETE_ITEM,
    payload: id
})
