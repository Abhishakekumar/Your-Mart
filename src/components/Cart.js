import React, { useContext, useState } from 'react'
import { ProdContext } from '../context/ProductContext'
import CartItem from './CartItem'
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
import Checkout from './Checkout';

var ShippingRate = [
    {
        label:"Standard Delivary - 3$",
        value:3
    },
    {
        label:"Fast Delivery - 6$",
        value:6
    },
    {
        label:"One Day Delivary - 10$",
        value:10
    }
]

let isSelected = 0;


function Cart() {

    const {cartData, removeAllItem} = useContext(ProdContext)

    const [shipVal, setShipVal] = useState(ShippingRate.value)

    let totalAmount = 0, totalQty = 0, finalBill = 0;
    cartData.map((item)=>{
        totalQty = totalQty + item.qty
        totalAmount = totalAmount + (item.price * item.qty)
        finalBill = totalAmount +  shipVal;
        return item;
    })

    const shipValHandler = (e) =>{
        setShipVal(e.value)
        isSelected = 1
    }

    if(totalQty === 0){
        isSelected = 0
    }

    const checkoutHandler = () => {
        if(isSelected === 1){
            return <Checkout amount={finalBill} qunt={totalQty} />
        }
    }

    return (
        
        <div className="cart-container">
            <div className="cartItems-container">
                <div className="cart-heading">
                     <h1>Shopping Cart</h1>
                     <button type="button" className="btn btn-danger btn-sm" onClick={removeAllItem}>Clear All</button>
                </div>
                {
                    cartData.map((item)=>{
                            return (
                                <CartItem key={item.id} data={item} />
                            )
                        })
                }
            </div>
            <div className="bill-container">
                <h1>ORDER SUMMARY</h1>
                <div className="bill-items">
                    <div className="bill-price">
                        <h2>ITEMS</h2>
                        <h2 className="item-2">{totalQty}</h2>
                        <h2>${totalAmount}</h2>
                    </div>
                    <h2 className="shipping-title">SHIPPING</h2>
                    <Select name="shipping" id="shipping" options={ShippingRate} onChange={shipValHandler}/>
                </div>
                <div className="total-amount">
                    <h2>TOTAL COST</h2>
                    <h2>${finalBill}</h2>
                </div>
                
                {
                    checkoutHandler()
                }
                
                <NavLink to="/cart" data-toggle="modal" data-target="#myModal">CHECKOUT</NavLink>
            </div>
        </div>
    )
}

export default Cart;
