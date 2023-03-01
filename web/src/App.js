import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js'
import Payment from './components/Payment.js';
import Penguin from './assets/penguin.png';

function App() {

  return (
    <div className="App">
        <header>
            <div className="wrapper headerFlex">
                <span>
                    <h1>The Pingu Store</h1>
                    <img src={Penguin} alt="icon of a penguin" />
                </span>
            </div>
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/payment' element={<Payment />}></Route>
            </Routes>
        </main>
        <footer>
            <p>Created by <span><a href="https://mandeepkmann.com/">Mandeep Mann</a></span></p>
        </footer>
    </div>
  );
}

export default App;
