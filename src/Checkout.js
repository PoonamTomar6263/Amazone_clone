import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'

import CheckoutProduct from './CheckoutProduct'
//import {useStateValue} from './StateProvider';
//import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">

            <div className="checkout_left">
                <h2>Your shopping basket - :</h2>
                {/* <h1>{user?.email}</h1> */}
                <div>
                    {basket.map(item => {
                        return (
                            <CheckoutProduct
                                id={item.id}
                                tittle={item.tittle}
                                image={item.image}
                                price={item.price}
                            />
                        )
                    })}

                </div>
            </div>
            <div className="checkout_right">
                <h2>SubTotal</h2>
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
