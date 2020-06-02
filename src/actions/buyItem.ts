import { BUY_ITEM } from './types';

export const buyItem = (id: Array<string>) => ({
    type: BUY_ITEM,
    payload: id
})
