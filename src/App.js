import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout'

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/products/:id" component={Product} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} />

            </Switch>
        </>
    );
}

export default App;
