import pingu from '../assets/pingu.jpg';
import { Link } from 'react-router-dom';

const Home = ({setShowItem}) => {

    return (
        <section className="home">
            <div className="product">
                <div className="wrapper productFlex">
                    <div className="imageContainer">
                        <img src={pingu} alt="A sculpture of Pingu" />
                    </div>
                    <div className="productInfo">
                        <div className="mainInfo">
                            <div className="mainInfoLeft">
                                <h2>Pingu Sculpture</h2>
                                <a href="https://www.instagram.com/p/CY2yuYKsgi-/" target='_blank' className='artist'>Sculpted by Simran Mann</a>
                            </div>
                            <h3>$10.00</h3>
                        </div>
                        <div className="details">
                            <p>Hand-sculpted with Super Sculpey polymer clay, a toothpick for support, acrylic paints, and clear gloss.</p>
                        </div>
                        <Link to='/payment' className='button buyNow'>Buy Now</Link>
                    </div>
                </div>
            </div>
            
            <div className="intro">
                <div className="wrapper introFlex">
                    <p>Hello~ I made this fake store while learning how to integrate Stripe payments 💳. Currently, this live version only simulates what happens when a purchase is made when the "Pay" button is clicked. Once I gain more knowledge and experience with Node.js and hosting servers I plan to revisit this project.</p>
                    <p>You can see the the web and server code both on my <span><a href="https://github.com/MandeepKMann/stripePayments">GitHub repo!</a></span></p>
                    <p>NOTE: You may run into issues with Stripe if your adblock is on! 🚫</p>
                </div>
            </div>
        </section> 
    )
}

export default Home;