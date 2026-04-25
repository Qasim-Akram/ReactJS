import dayjs from "dayjs";
import { formatMoney } from "../../utills/money";

export function DeliveryOptions({ deliveryOptions, cartitems }) {
    return (
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

    )
}