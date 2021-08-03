import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
function CheckoutProduct({id,image,tittle,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
            
        })
        //remove from basket
    }
    return (
        <div className="checkoutProduct">
 
          
            <div className="checkout_product_info">
                <p className="checkoutProduct_tittle">{tittle}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
                    <img src={image}/>

            </div>
            
           <button className="btn-remove" onClick={removeFromBasket} >Remove from cart</button>
        </div>
    )
}

export default CheckoutProduct
