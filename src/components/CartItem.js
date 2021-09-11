import React, { useContext } from 'react'
import { ProdContext } from '../context/ProductContext';
import './CartItem.css'
function CartItem(props) {


    const{incrementItem, decrementItem, deleteItemHandler} = useContext(ProdContext)

    const {id,title, image, qty, price} = props.data;
    
    const totalPrice = price * qty;

    return (
        <div className="main-cartItem">
            <img src={image} alt="tv" />
            <div className="cartItem-details">
                <div className="cartItem-content">
                    <h1>{title}</h1>
                    <p onClick={()=>deleteItemHandler(id)}>&times;</p>
                </div>
                <div className="cartItem-calculation">
                    <div className="cartItem-qty">
                        <p onClick={()=>decrementItem(id)}>-</p>
                        <p className="main-qty">{qty}</p>
                        <p onClick={()=>incrementItem(id)}>+</p>
                    </div>
                    <h2>${totalPrice}</h2>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
