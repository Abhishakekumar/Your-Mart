import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProdContext } from '../context/ProductContext'
import "./Navbar.css"

const Navbar = () => {

    const {cartData} = useContext(ProdContext)

    let totalItem = 0;
    cartData.map((item)=>{
      totalItem = totalItem + item.qty
      return item;
    })

    return (
        <div>
          <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <NavLink className="navbar-brand" to="/"><strong style={{color: "#3498db"}}>YOUR-MART</strong></NavLink>




  <div className="spinner-border text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-border text-dark" role="status">
  <span className="sr-only">Loading...</span>
</div>
</div>



  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/shop">Shop</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>


      <li className="nav-item nav-cart">
        <NavLink className="nav-link" to="/cart"><i className="fa fa-shopping-cart cart-sym"></i></NavLink>1
        <p className="total-qty">{totalItem}</p>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Navbar;
