import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

const PaymentForm = () => {

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post('http://localhost:300/payment', {
                    amount: 1000,
                    id
                })
    
                if(response.data.success) {
                    console.log("Successful Payment")
                    setSuccess(true);
                }
    
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    };


    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className='formGroup'>
                <div className="formRow">
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
        <div>
            <h2>You Just Bought a Sweet Spatula!</h2>
        </div>
        }
        </>
    );
};

export default PaymentForm;