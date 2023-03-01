import React, { useState } from 'react'
import axios from "axios"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Swal from "sweetalert2";


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#ebf4ff",
			color: "#fff",
			fontWeight: 700,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#ebf4ff" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

const PaymentForm = () => {

    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    
    const errorAlert = (error) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        Toast.fire({
            icon: 'error',
            title: `${error}`
        })
    } 

    const handleClick = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            console.log("Successful payment")
            setSuccess(true)
        } else if (error) {
            errorAlert(error.message)
        } else {
            return
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
        errorAlert(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleClick} className='stripeForm'>
            <fieldset className="formGroup">
                <div className="formRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
       <div className='purchaseComplete'>
           <h2>You've just bought a Pingu!</h2>
           <img src="https://media1.giphy.com/media/TVPJNp47j5EA0/giphy.gif?cid=ecf05e473prd2ch5711twba2j4wzyqoy4sbs2uyjmd2zzmmx&rid=giphy.gif&ct=g" alt='gif of Pingu dancing'></img>
       </div> 
        }
            
        </>
    )
}

export default PaymentForm;