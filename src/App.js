import React from 'react'
import {Route, Switch} from "react-router-dom";
import './css/App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'
import Cart from './components/Cart';
import Navbar from './components/Navbar'
import Shop from './components/Shop';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import { ProductProvider } from './context/ProductContext';


const App = () => {
  return (
    <div>

      <ProductProvider>
        <Navbar/>
        <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/shop" component={Shop}/>
              <Route path="/cart" component={Cart}/>
              <Route path='/productDetails/:id' component={ProductDetails}/>
        </Switch>
      </ProductProvider>
      
      <Footer/>
        
    </div>
  )
}

export default App;
