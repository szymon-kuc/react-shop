import { BUY_ITEM } from './types';

export const buyItem = (item: any) => ({
    type: BUY_ITEM,
    payload: item
})
