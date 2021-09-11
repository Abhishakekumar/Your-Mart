import React, { useContext } from 'react'
import { ProdContext } from '../context/ProductContext';

const Checkout = ({amount,qunt}) => {
    const {onCheckoutHandler} = useContext(ProdContext)
    return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                
                
                    <div className="modal-header">
                    <h4 className="modal-title">Check Item</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <div className="modal-body">
                    <h5 className="card-title">Items : {qunt}</h5>
                <h5 className="card-title">Total Price : ${amount}</h5>
                </div>
            
                    <div className="modal-body">
                    Order Successfully..Thanks..
                    </div>
                    
                
                    <div className="modal-footer">
                    <button onClick={onCheckoutHandler} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    
                </div>
                </div>
            </div>
    )
}

export default Checkout;
