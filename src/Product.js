import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
function Product({ id, tittle, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log("this is the basket", basket);
    const addToBasket = () => {
        //dispatch the item into the data-layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                tittle: tittle,
                price: price,
                image: image,
                rating: rating,
            },
        });

    };
    return (
        <div className="product">
            <div className="product_info">

                <p>{tittle}</p>
                <small>Rs</small>
                <strong>{price}</strong>
                <div className="product_rating">
                    {/* {Array(rating).fill().map((_, i) => {
                        <StarIcon />
                    })} */}

                    <StarIcon />
                    <StarIcon />
                    <StarIcon />

                </div>
                <div className="product_image">
                    <img src={image} />
                </div>
                <div className="btn">
                    <button className="btn_add" onClick={addToBasket}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
