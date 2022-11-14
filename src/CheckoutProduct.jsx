import React from 'react';
import './checkoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            // eslint-disable-next-line object-shorthand
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            {id}
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))}
                </div>
                <button type="button" onClick={removeFromBasket}>
                    Remove from basket
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
