import StripeContainer from './StripeContainer';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";

const Payment = () => {

    //https://github.com/sweetalert2/sweetalert2/issues/424
    const copyAlert = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        Toast.fire({
            icon: 'success',
            title: 'Copied!'
        })
    } 

    return (
        <div className="paymentForm">
            <p>This is a fake storefront so don't put your actual credit card information unless you want me to have it 👀. I suggest you use Stripe's test credit card info.</p>

            <CopyToClipboard
                text='4242 4242 4242 4242'
                onCopy={copyAlert}
                >
                <p className='copyButton'>4242 4242 4242 4242 <FontAwesomeIcon icon={faCopy} /></p>
            </CopyToClipboard>

            <p>The expiry date can only be a current or future date and the CVC and ZIP/Postal code can be anything as long as it follows the correct formats.</p>
            <StripeContainer /> 
            <Link to='/' className='button'>Cancel</Link> 
        </div>
        
    )
};

export default Payment;