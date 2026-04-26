import dayjs from "dayjs";
import { formatMoney } from "../../utills/money";
import { DeliveryOptions } from "./DeliveryOptions";
import axios from "axios";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartitems) => {

                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id == cartitems.deliveryOptionId;
                    })

                const deleteCartItem = async () => {
                    await axios.delete(`/api/cart-items/${cartitems.productId}`)
                    await loadCart();
                }

                return (
                    <>
                        <div key={cartitems.id} className="cart-item-container">
                            <div className="delivery-date">
                                Delivery date:
                                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>

                            <div className="cart-item-details-grid">
                                <img className="product-image"
                                    src={cartitems.product.image} />

                                <div className="cart-item-details">
                                    <div className="product-name">
                                        {cartitems.product.name}
                                    </div>
                                    <div className="product-price">
                                        {formatMoney(cartitems.product.priceCents)}
                                    </div>
                                    <div className="product-quantity">
                                        <span>
                                            Quantity: <span className="quantity-label">{cartitems.quantity}</span>
                                        </span>
                                        <span className="update-quantity-link link-primary">
                                            Update
                                        </span>
                                        <span className="delete-quantity-link link-primary"
                                            onClick={deleteCartItem}>
                                            Delete
                                        </span>
                                    </div>
                                </div>
                                <DeliveryOptions cartitems={cartitems} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                            </div>
                        </div>
                    </>)
            })
            }
        </div>
    )
}