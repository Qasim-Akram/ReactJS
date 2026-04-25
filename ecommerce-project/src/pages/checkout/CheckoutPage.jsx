import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react';
import './CheckoutPage.css';
import { CheckoutHeader } from './CheckoutHeader';
import { formatMoney } from '../../utills/money';

export function CheckoutPage({ cart }) {
    const [deliveryOptions, setdeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)

    useEffect(() => {
        axios.get(`/api/delivery-options?expand=estimatedDeliveryTime`)
            .then((response) => {
                setdeliveryOptions(response.data)
            })

        axios.get(`/api/payment-summary`)
            .then((response) => {
                setPaymentSummary(response.data)
            })
    }, [])

    return (
        <>
            <title>Checkout</title>
            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">

                        {deliveryOptions.length > 0 && cart.map((cartitems) => {

                            const selectedDeliveryOption = deliveryOptions
                                .find((deliveryOption) => {
                                    return deliveryOption.id == cartitems.deliveryOptionId;
                                })

                            return (<>

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
                                                <span className="delete-quantity-link link-primary">
                                                    Delete
                                                </span>
                                            </div>
                                        </div>

                                        <div className="delivery-options">
                                            <div className="delivery-options-title">
                                                Choose a delivery option:
                                            </div>
                                            {deliveryOptions.map((deliveryOption) => {

                                                let priceString = `Free Shipping`;
                                                if (deliveryOption.priceCents > 0) {
                                                    priceString = `${formatMoney(deliveryOption.priceCents)}-Shipping`
                                                }

                                                return (<>
                                                    <div key={deliveryOption.id} className="delivery-option">
                                                        <input type="radio"
                                                            checked={deliveryOption.id === cartitems.deliveryOptionId}
                                                            className="delivery-option-input"
                                                            name={`delivery-option- ${cartitems.productId}`} />
                                                        <div>
                                                            <div className="delivery-option-date">
                                                                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(`dddd,MMMM DD`)}
                                                            </div>
                                                            <div className="delivery-option-price">
                                                                {priceString}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>)
                                            })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </>)
                        })
                        }

                    </div>
                    {paymentSummary && (
                        <>
                            <div className="payment-summary">
                                <div className="payment-summary-title">
                                    Payment Summary
                                </div>

                                <div className="payment-summary-row">
                                    <div>Items ({paymentSummary.totalItems}):</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary.productCostCents)}</div>
                                </div>

                                <div className="payment-summary-row">
                                    <div>Shipping &amp; handling:</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary.shippingCostCents)}</div>
                                </div>

                                <div className="payment-summary-row subtotal-row">
                                    <div>Total before tax:</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary.shippingCostBeforeTaxCents)}
                                    </div>
                                </div>

                                <div className="payment-summary-row">
                                    <div>Estimated tax (10%):</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary.taxCents)}</div>
                                </div>

                                <div className="payment-summary-row total-row">
                                    <div>Order total:</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostCents)}</div>
                                </div>

                                <button className="place-order-button button-primary">
                                    Place your order
                                </button>
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
        </>
    )

}