import { FETCH_ITEMS } from './types';


export const fetchItems = () => (
    (dispatch: any) => {
    fetch('http://34.89.250.147:3000/products/')
    .then(res => res.json())
    .then(data => {
        if(data.error) {
            throw(data.error);
        }
        console.log(data.products);
        dispatch ({
            type: FETCH_ITEMS,
            payload: data.products
        })
    })
    .catch(error => {
        console.log(error);
    })
}
)
