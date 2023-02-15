import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js'
import Payment from './components/Payment.js';

function App() {

  return (
    <div className="App">
        <h1>The Pingu Store</h1>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/payment' element={<Payment />}></Route>
        </Routes>



    </div>
  );
}

export default App;
