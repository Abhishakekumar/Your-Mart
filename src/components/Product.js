import React from 'react'
import { NavLink } from 'react-router-dom';

function Product(props) {
    const {id,title, image, price, category } = props.data;
    return (
        <div className="four wide column main-card">
            <div className="ui link cards">
                <div className="card">
                    <div className="image"><img src={image} alt={title} /></div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="btn-container">
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                        <NavLink to={`/productDetails/${id}`}>View Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product