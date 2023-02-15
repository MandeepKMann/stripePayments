import pingu from '../assets/pingu.jpg';
import { Link } from 'react-router-dom';

const Home = ({setShowItem}) => {

    return (
        <>
        <div className="product">
            <h3>$10.00</h3>
            <img src={pingu} alt="" />
            <a href="https://www.instagram.com/p/CY2yuYKsgi-/">Sculpted by Simran Mann</a>
            <p>Hand-sculpted with Super Sculpey polymer clay, a toothpick for support, acrylic paints, and clear gloss.</p>
            <Link to='/payment' className='button'>Purchase Pingu</Link>
        </div>
        </>
        
    )
}

export default Home;