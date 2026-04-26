import { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utills/money";
import { DeliveryOptions } from "./DeliveryOptions";

export function CartItemsDetail({ cartitems, deliveryOptions, selectedDeliveryOption, loadCart }) {
    const [updated, setUpdated] = useState(false);
    const [quantity, setQuantity] = useState(cartitems.quantity);

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartitems.productId}`)
        await loadCart();
    }

    const updateQuantity = async () => {
        if (updated) {
            await axios.put(`/api/cart-items/${cartitems.productId}`, {
                quantity: Number(quantity)
            });
            await loadCart();
            setUpdated(false);
        } else {
            setUpdated(true);
        }
    }

    const newQuantity = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div className="cart-item-container">
            <div className="delivery-date">
                Delivery date:
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>

            <div className="cart-item-details-grid">
                <img className="product-image" src={cartitems.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">{cartitems.product.name}</div>
                    <div className="product-price">{formatMoney(cartitems.product.priceCents)}</div>
                    <div className="product-quantity">
                        <span>
                            Quantity:
                            <input className="quantity-input" type="text" value={quantity}
                                onChange={newQuantity}
                                disabled={!updated} />

                        </span>
                        <span className="update-quantity-link link-primary"
                            onClick={updateQuantity}>
                            {updated ? "Save" : "Update"}
                        </span>
                        <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                            Delete
                        </span>
                    </div>
                </div>
                <DeliveryOptions cartitems={cartitems} deliveryOptions={deliveryOptions} loadCart={loadCart} />
            </div>
        </div>
    )
}