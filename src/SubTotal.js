import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'
function SubTotal() {
    const [{basket},dispatch]=useStateValue();
    console.log("subtotal componet",basket);
    return (
        <div className="subtotal">
            <h1>i am subtotal</h1>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({basket.length}:items):<strong>{value}</strong>
                    </p>
                        <small>
                             
                        <input type='checkbox'/>This order contains a gift
                         
                        </small>
                    
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs"}
            />
        </div>
    );
}

export default SubTotal
