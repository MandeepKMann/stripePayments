import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import PaymentForm from './PaymentForm';

const publicKey = 'pk_test_51Mb9aQLQhbQqSNz1RroyYHAyMtCUSrZcIJmv094bQunZx4K672McNhW4lQrEvreASkQx94egH5BvDa0nN4p176L300wQWPPTzb';
const stripeTestPromise = loadStripe(publicKey);

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
};

export default StripeContainer;