import StripeContainer from './StripeContainer';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <>
        <StripeContainer /> 
        <Link to='/' className='button'>Go Back</Link> 
        </>
        
    )
};

export default Payment;