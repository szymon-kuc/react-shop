import { EDIT_ITEM } from './types';

export const editItem = (item: any) => ({
    type: EDIT_ITEM,
    payload: item
})
