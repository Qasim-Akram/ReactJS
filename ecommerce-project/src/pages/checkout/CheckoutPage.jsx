import axios from 'axios';
import { useEffect, useState } from 'react';
import './CheckoutPage.css';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart }) {
    const [deliveryOptions, setdeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)

    useEffect(() => {
        const fetchCheckoutData = async () => {
            let response = await axios.get(`/api/delivery-options?expand=estimatedDeliveryTime`)
            setdeliveryOptions(response.data)

            response = await axios.get(`/api/payment-summary`)
            setPaymentSummary(response.data)
        }
        fetchCheckoutData();
    }, [])

    return (
        <>
            <title>Checkout</title>
            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
                    <paymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )

}